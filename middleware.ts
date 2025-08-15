// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export function middleware(req: NextRequest) {
  // Desactivar protección en desarrollo/local
  if (process.env.NODE_ENV !== 'production') {
    return NextResponse.next()
  }

  const { pathname } = req.nextUrl

  // Permite estáticos y rutas internas de Next
  if (
    PUBLIC_FILE.test(pathname) ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api/health')
  ) {
    return NextResponse.next()
  }

  const user = process.env.BASIC_AUTH_USER
  const pass = process.env.BASIC_AUTH_PASS

  // Si por alguna razón no están definidas en Vercel, no bloquees
  if (!user || !pass) return NextResponse.next()

  const authHeader = req.headers.get('authorization')
  if (authHeader?.startsWith('Basic ')) {
    const b64 = authHeader.split(' ')[1] || ''
    const [u, p] = Buffer.from(b64, 'base64').toString().split(':')
    if (u === user && p === pass) return NextResponse.next()
  }

  return new NextResponse('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' },
  })
}

// Protege todo excepto /api/health
export const config = { matcher: ['/((?!api/health).*)'] }
