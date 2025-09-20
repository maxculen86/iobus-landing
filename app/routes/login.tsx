import { useState } from 'react'
import { json, redirect, type ActionFunctionArgs, type LoaderFunctionArgs } from '@remix-run/cloudflare'
import { Form, Link, useActionData, useNavigation, useSearchParams } from '@remix-run/react'
import { createSupabaseServerClient } from '~/lib/supabase.server'
import { Button } from '~/components/ui/button'

export async function loader({ request, context }: LoaderFunctionArgs) {
  const supabase = createSupabaseServerClient(request, context.cloudflare.env)
  
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    return redirect('/')
  }

  return json({})
}

export async function action({ request, context }: ActionFunctionArgs) {
  const formData = await request.formData()
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const action = formData.get('_action') as string

  if (!email || !password) {
    return json({ error: 'Email y contraseña son requeridos' }, { status: 400 })
  }

  const supabase = createSupabaseServerClient(request, context.cloudflare.env)

  if (action === 'login') {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      return json({ error: error.message }, { status: 400 })
    }

    return redirect('/', {
      headers: {
        'Set-Cookie': `sb-access-token=${data.session?.access_token}; Path=/; HttpOnly`,
      },
    })
  }

  if (action === 'signup') {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `http://localhost:5173/auth/callback`
      }
    })

    if (error) {
      if (error.message.includes('already registered')) {
        return json({ 
          error: 'Este email ya está registrado. Intenta iniciar sesión en su lugar.' 
        }, { status: 400 })
      }
      return json({ error: error.message }, { status: 400 })
    }

    if (data.user && !data.session) {
      return json({ 
        message: 'Revisa tu email para confirmar tu cuenta',
        email: data.user.email 
      })
    }

    return json({ 
      message: 'Cuenta creada exitosamente',
      email: data.user?.email 
    })
  }

  return json({ error: 'Acción no válida' }, { status: 400 })
}

export default function Login() {
  const actionData = useActionData<typeof action>()
  const navigation = useNavigation()
  const [searchParams] = useSearchParams()
  const [isSignUp, setIsSignUp] = useState(false)
  
  const isSubmitting = navigation.state === 'submitting'
  const urlError = searchParams.get('error')
  const urlMessage = searchParams.get('message')

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
          <div className="text-center mb-8">
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/logos/ISOLOGO-20.svg" 
                alt="IOBus" 
                className="h-12 mx-auto"
              />
            </Link>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {isSignUp ? 'Crear cuenta' : 'Iniciar sesión'}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {isSignUp 
                ? 'Únete a IOBus para gestionar tus buses' 
                : 'Accede a tu panel de control'}
            </p>
          </div>

          {(urlError || 'error' in (actionData || {})) && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 px-4 py-3 rounded-md mb-4">
              {urlError === 'auth_callback_error' ? 'Error al confirmar el email. Inténtalo de nuevo.' :
               urlError === 'missing_token' ? 'Enlace de confirmación inválido.' :
               urlError === 'unexpected_error' ? 'Error inesperado. Contacta al soporte.' :
               urlMessage ? decodeURIComponent(urlMessage) :
               (actionData as any)?.error || 'Error desconocido'}
            </div>
          )}

          {'message' in (actionData || {}) && (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-600 dark:text-green-400 px-4 py-3 rounded-md mb-4">
              {(actionData as any).message}
            </div>
          )}

          <Form method="post" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                minLength={6}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="••••••••"
              />
            </div>

            <Button
              type="submit"
              name="_action"
              value={isSignUp ? 'signup' : 'login'}
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting 
                ? 'Cargando...' 
                : isSignUp 
                  ? 'Crear cuenta' 
                  : 'Iniciar sesión'
              }
            </Button>
          </Form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              {isSignUp ? '¿Ya tienes cuenta?' : '¿No tienes cuenta?'}
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="ml-2 text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                {isSignUp ? 'Iniciar sesión' : 'Crear cuenta'}
              </button>
            </p>
          </div>

          <div className="mt-6 text-center">
            <Link 
              to="/" 
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-sm"
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}