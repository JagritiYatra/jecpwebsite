import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // Check if the request is for the admin area
  if (request.nextUrl.pathname.startsWith('/webmis')) {
    // Allow access to login page
    if (request.nextUrl.pathname === '/webmis/login') {
      return supabaseResponse
    }

    // Check authentication
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      // Redirect to login if not authenticated
      const url = request.nextUrl.clone()
      url.pathname = '/webmis/login'
      return NextResponse.redirect(url)
    }

    // Check if user is an admin
    const { data: adminData } = await supabase
      .from('jecp_admins')
      .select('id, email, role, is_active')
      .eq('email', user.email?.toLowerCase())
      .eq('is_active', true)
      .maybeSingle()

    if (!adminData) {
      // Not an admin, redirect to login with error
      const url = request.nextUrl.clone()
      url.pathname = '/webmis/login'
      url.searchParams.set('error', 'unauthorized')
      return NextResponse.redirect(url)
    }
  }

  return supabaseResponse
}

export const config = {
  matcher: ['/webmis/:path*'],
}
