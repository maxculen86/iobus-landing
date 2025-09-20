import { redirect, type LoaderFunctionArgs } from '@remix-run/cloudflare'
import { createSupabaseServerClient } from '~/lib/supabase.server'

export async function loader({ request, context }: LoaderFunctionArgs) {
  const url = new URL(request.url)
  const token = url.searchParams.get('token')
  const type = url.searchParams.get('type')
  const next = url.searchParams.get('next') ?? '/'

  // Debug logs
  console.log('Callback URL:', url.toString())
  console.log('All search params:', Object.fromEntries(url.searchParams.entries()))
  console.log('Token:', token)
  console.log('Type:', type)

  if (token && type === 'signup') {
    const supabase = createSupabaseServerClient(request, context.cloudflare.env)
    
    try {
      const { error } = await supabase.auth.verifyOtp({
        token_hash: token,
        type: 'email'
      })
      
      if (error) {
        console.error('Error verifying OTP:', error)
        return redirect('/login?error=auth_callback_error&message=' + encodeURIComponent(error.message))
      }

      return redirect('/?confirmed=true')
    } catch (err) {
      console.error('Unexpected error:', err)
      return redirect('/login?error=unexpected_error')
    }
  }

  return redirect('/login?error=missing_token')
}

export default function AuthCallback() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600 dark:text-gray-400">Confirmando tu cuenta...</p>
      </div>
    </div>
  )
}