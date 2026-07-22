import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createClient } from '@supabase/supabase-js'

const projectUrl = process.env.SUPABASE_URL
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!projectUrl || !serviceRoleKey) {
  throw new Error('Faltan SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY para la importación.')
}

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const projectDir = path.dirname(scriptDir)
const manifest = JSON.parse(await readFile(path.join(scriptDir, 'legacy-images.json'), 'utf8'))
const supabase = createClient(projectUrl, serviceRoleKey, {
  auth: { persistSession: false, autoRefreshToken: false },
})

const { data: restaurant, error: restaurantError } = await supabase
  .from('restaurants')
  .select('id')
  .eq('slug', 'tavola')
  .single()

if (restaurantError || !restaurant) {
  throw new Error(`No se pudo encontrar Tavola: ${restaurantError?.message ?? 'sin datos'}`)
}

const contentTypes = {
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  webp: 'image/webp',
}

let uploaded = 0
const failures = []

async function uploadImage(entry) {
  const sourcePath = path.join(projectDir, 'public', ...entry.source.split('/'))
  const destination = `${restaurant.id}/${entry.product_id}/legacy.${entry.extension}`
  const bytes = await readFile(sourcePath)
  const { error } = await supabase.storage.from('product-images').upload(destination, bytes, {
    contentType: contentTypes[entry.extension],
    cacheControl: '31536000',
    upsert: true,
  })

  if (error) {
    failures.push({ product_id: entry.product_id, source: entry.source, message: error.message })
    return
  }

  uploaded += 1
}

const concurrency = 6
for (let index = 0; index < manifest.length; index += concurrency) {
  await Promise.all(manifest.slice(index, index + concurrency).map(uploadImage))
}

if (failures.length) {
  console.error(JSON.stringify({ uploaded, failures }, null, 2))
  process.exitCode = 1
} else {
  console.log(JSON.stringify({ restaurant_id: restaurant.id, uploaded, failures: 0 }, null, 2))
}
