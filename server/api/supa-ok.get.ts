export default defineEventHandler(() => {
  // if these are undefined, your envs aren’t loading
  const url = process.env.NUXT_PUBLIC_SUPABASE_URL
  const keyPresent = !!process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY
  return { ok: !!url && keyPresent }
})