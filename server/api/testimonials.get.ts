// Returns latest testimonials for the public homepage
export default defineEventHandler(async () => {
  const url = process.env.NUXT_PUBLIC_SUPABASE_URL!
  const key = process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY!
  if (!url || !key) throw createError({ statusCode: 500, statusMessage: 'Supabase env missing' })

  const { createClient } = await import('@supabase/supabase-js')
  const supabase = createClient(url, key)

  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(12)

  if (error) throw createError({ statusCode: 500, statusMessage: error.message })
  return data
})