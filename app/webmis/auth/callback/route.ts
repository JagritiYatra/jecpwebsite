import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = '/webmis'

  if (code) {
    const cookieStore = await cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll()
          },
          setAll(cookiesToSet) {
            try {
              cookiesToSet.forEach(({ name, value, options }) =>
                cookieStore.set(name, value, options)
              )
            } catch {}
          },
        },
      }
    )

    const { data: { user }, error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error && user) {
      // Check if user is an admin
      const { data: adminData } = await supabase
        .from('jecp_admins')
        .select('id, email, role')
        .eq('email', user.email?.toLowerCase())
        .eq('is_active', true)
        .maybeSingle()

      if (adminData) {
        return NextResponse.redirect(`${origin}${next}`)
      } else {
        // Sign out if not an admin
        await supabase.auth.signOut()
        return NextResponse.redirect(`${origin}/webmis/login?error=unauthorized`)
      }
    }
  }

  // Return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/webmis/login?error=auth_failed`)
}
