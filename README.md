# Tavola Chiringo — copia Supabase

Copia de pruebas de la carta pública conectada al proyecto multi-restaurante de Supabase.

## Desarrollo local

1. Copia `.env.example` como `.env.local` y completa las dos variables públicas.
2. Ejecuta `npm install`.
3. Ejecuta `npm run dev`.

## Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist`
- Variables requeridas: `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`

La anon key puede estar en el bundle del navegador: la autorización real la aplican las políticas RLS de Supabase. Nunca se debe añadir una `service_role` a Cloudflare Pages ni al repositorio.
