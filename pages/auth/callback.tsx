// pages/auth/callback.tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../../lib/supabaseClient';

export default function AuthCallback() {
  const router = useRouter();
  const [msg, setMsg] = useState('Finishing sign-in…');

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        // 1) If tokens are in the URL hash, set the client session
        const hash = typeof window !== 'undefined' ? window.location.hash.slice(1) : '';
        const params = new URLSearchParams(hash);
        const access_token = params.get('access_token');
        const refresh_token = params.get('refresh_token');

        if (access_token && refresh_token) {
          const { error } = await supabase.auth.setSession({ access_token, refresh_token });
          if (error) {
            if (!cancelled) {
              console.error('setSession error:', error.message);
              setMsg('Could not set session. Redirecting to login…');
              router.replace('/login');
            }
            return;
          }
          // Clean URL (remove tokens from the bar)
          if (typeof window !== 'undefined') {
            window.history.replaceState({}, document.title, '/auth/callback');
          }
        }

        // 2) Ensure we have a user
        const { data: userRes } = await supabase.auth.getUser();
        const user = userRes?.user;
        if (!user) {
          if (!cancelled) {
            setMsg('No user session found. Redirecting to login…');
            router.replace('/login');
          }
          return;
        }

        // 3) Mirror tokens into secure httpOnly cookies for server-side APIs
        const { data: sess } = await supabase.auth.getSession();
        const access = sess?.session?.access_token;
        const refresh = sess?.session?.refresh_token;
        if (access && refresh) {
          const syncRes = await fetch('/api/auth/sync', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ access_token: access, refresh_token: refresh }),
          });
          if (!syncRes.ok) {
            console.warn('auth/sync failed', await syncRes.text().catch(() => ''));
          }
        }

        // 4) Bootstrap profile / child (if role=child) / entitlement
        const boot = await fetch('/api/profile/bootstrap', { method: 'POST' });
        if (!boot.ok) {
          const text = await boot.text().catch(() => '');
          console.error('bootstrap failed:', text);
          if (!cancelled) {
            setMsg('Account bootstrap failed. Redirecting to login…');
            router.replace('/login');
          }
          return;
        }

        // 5) Get role and redirect
        const { data: prof, error: profErr } = await supabase
          .from('profiles')
          .select('role')
          .eq('user_id', user.id)
          .single();

        if (profErr) {
          console.error('profile lookup error:', profErr.message);
          if (!cancelled) router.replace('/login');
          return;
        }

        const role = prof?.role as string | null;
        if (!cancelled) {
          if (role === 'child') router.replace('/courses');
          else if (role === 'parent') router.replace('/profile/select');
          else if (role === 'instructor' || role === 'org_admin') router.replace('/academy');
          else router.replace('/debug/me'); // fallback so we can inspect
        }
      } catch (e: any) {
        console.error(e);
        if (!cancelled) {
          setMsg('Unexpected error. Redirecting to login…');
          router.replace('/login');
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [router]);

  return (
    <main style={{ padding: 24, fontFamily: 'system-ui' }}>
      <h1>Auth callback</h1>
      <p>{msg}</p>
    </main>
  );
}
