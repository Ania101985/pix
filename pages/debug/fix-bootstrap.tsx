import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function FixBootstrap() {
  const [log, setLog] = useState<string>('Starting…');
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    (async () => {
      try {
        const append = (s: string) => setLog((prev) => prev + '\n' + s);

        append('1) Checking client session…');
        const { data: sess } = await supabase.auth.getSession();
        const access = sess?.session?.access_token;
        const refresh = sess?.session?.refresh_token;
        if (!access || !refresh) {
          append('No client session. Go to /login first.');
          return;
        }
        append('Client session OK.');

        append('2) Syncing httpOnly cookies via /api/auth/sync…');
        const syncRes = await fetch('/api/auth/sync', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ access_token: access, refresh_token: refresh }),
        });
        append(`sync status: ${syncRes.status}`);

        append('3) Bootstrapping profile/child/entitlement…');
        const bootRes = await fetch('/api/profile/bootstrap', { method: 'POST' });
        append(`bootstrap status: ${bootRes.status}`);
        const bootText = await bootRes.text();
        append(`bootstrap body: ${bootText}`);

        append('4) Reading rows…');
        const { data: u } = await supabase.auth.getUser();
        const uid = u.user?.id;

        const { data: prof } = await supabase.from('profiles').select('*').eq('user_id', uid).maybeSingle();
        const { data: ent } = await supabase.from('entitlements').select('*').eq('user_id', uid).maybeSingle();
        const { data: kids1 } = await supabase.from('children').select('*').eq('child_user_id', uid);
        const { data: kids2 } = await supabase.from('children').select('*').eq('parent_user_id', uid);

        setResult({ profile: prof || null, entitlement: ent || null, children: [...(kids1||[]), ...(kids2||[])] });
        append('Done.');
      } catch (e: any) {
        setLog((prev) => prev + '\nERROR: ' + (e?.message || String(e)));
      }
    })();
  }, []);

  return (
    <main style={{ padding: 24, fontFamily: 'system-ui' }}>
      <h1>Fix Bootstrap</h1>
      <pre style={{ whiteSpace: 'pre-wrap' }}>{log}</pre>
      {result && (
        <>
          <h2>Profile</h2>
          <pre>{JSON.stringify(result.profile, null, 2)}</pre>
          <h2>Entitlement</h2>
          <pre>{JSON.stringify(result.entitlement, null, 2)}</pre>
          <h2>Children</h2>
          <pre>{JSON.stringify(result.children, null, 2)}</pre>
        </>
      )}
      <p style={{marginTop:16}}>
        If this shows real rows, open <a href="/debug/me">/debug/me</a> — it should now be populated.
      </p>
    </main>
  );
}
