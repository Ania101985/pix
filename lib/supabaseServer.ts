import { createServerClient, type CookieOptions } from '@supabase/ssr';
import type { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';

export function getServerClient(req: NextApiRequest, res: NextApiResponse) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  if (!url || !anon) throw new Error('Missing Supabase envs');

  return createServerClient(url, anon, {
    cookies: {
      get(name: string) {
        return req.cookies[name];
      },
      set(name: string, value: string, options: CookieOptions) {
        const cookie = serialize(name, value, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          path: '/',
          ...options,
        });
        // Support multiple Set-Cookie headers
        const prev = res.getHeader('Set-Cookie');
        if (prev) {
          const arr = Array.isArray(prev) ? prev : [String(prev)];
          res.setHeader('Set-Cookie', [...arr, cookie]);
        } else {
          res.setHeader('Set-Cookie', cookie);
        }
      },
      remove(name: string, options: CookieOptions) {
        const cookie = serialize(name, '', {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          path: '/',
          maxAge: 0,
          ...options,
        });
        const prev = res.getHeader('Set-Cookie');
        if (prev) {
          const arr = Array.isArray(prev) ? prev : [String(prev)];
          res.setHeader('Set-Cookie', [...arr, cookie]);
        } else {
          res.setHeader('Set-Cookie', cookie);
        }
      },
    },
  });
}
