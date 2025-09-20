import { createServerClient, parse, serialize } from '@supabase/ssr'

export const createSupabaseServerClient = (request: Request, env: any) => {
  const cookies = parse(request.headers.get('Cookie') ?? '')

  return createServerClient(
    env.SUPABASE_URL,
    env.SUPABASE_ANON_KEY,
    {
      cookies: {
        get(key) {
          return cookies[key]
        },
        set(key, value, options) {
          // This will be handled by the response headers
        },
        remove(key, options) {
          // This will be handled by the response headers
        },
      },
    }
  )
}