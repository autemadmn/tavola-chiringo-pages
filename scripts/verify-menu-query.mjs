import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createClient } from '@supabase/supabase-js'

const projectDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const env = Object.fromEntries(
  (await readFile(path.join(projectDir, '.env.local'), 'utf8'))
    .split(/\r?\n/)
    .filter((line) => line && !line.startsWith('#') && line.includes('='))
    .map((line) => {
      const separator = line.indexOf('=')
      return [line.slice(0, separator), line.slice(separator + 1)]
    }),
)

const supabase = createClient(env.VITE_SUPABASE_URL, env.VITE_SUPABASE_ANON_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
})

const { data, error } = await supabase
  .from('restaurants')
  .select(`
    id,
    slug,
    name,
    default_locale,
    locales,
    sold_out_behavior,
    categories!categories_restaurant_id_fkey(
      id,
      name,
      position,
      section,
      is_active,
      products!products_category_restaurant_fkey(
        id,
        restaurant_id,
        category_id,
        name,
        description,
        price,
        price_display,
        price_note,
        image_path,
        is_available,
        is_active,
        position,
        name_size
      )
    )
  `)
  .eq('slug', 'tavola')
  .eq('categories.is_active', true)
  .eq('categories.products.is_active', true)
  .order('position', { referencedTable: 'categories', ascending: true })
  .order('position', { referencedTable: 'categories.products', ascending: true })
  .single()

if (error) {
  console.error(JSON.stringify(error, null, 2))
  process.exitCode = 1
} else {
  console.log(
    JSON.stringify(
      {
        restaurant: data.name,
        restaurant_id: data.id,
        categories: data.categories.length,
        products: data.categories.reduce((total, category) => total + category.products.length, 0),
        first_category: data.categories[0]?.name?.es,
        first_product: data.categories[0]?.products[0]?.name?.es,
        image_path: data.categories[0]?.products[0]?.image_path,
      },
      null,
      2,
    ),
  )
}
