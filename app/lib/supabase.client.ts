import { createBrowserClient } from '@supabase/ssr'

export const createSupabaseClient = () => {
  return createBrowserClient(
    window.ENV?.SUPABASE_URL || '',
    window.ENV?.SUPABASE_ANON_KEY || ''
  )
}