import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

type Row = Record<string, any>;

export default function DebugMe() {
  const [session, setSession] = useState<Row | null>(null);
  const [profile, setProfile] = useState<Row | null>(null);
  const [entitlement, setEntitlement] = useState<Row | null>(null);
  const [children, setChildren] = useState<Row[]>([]);
  const [msg, setMsg] = useState<string>('Loading…');

  useEffect(() => {
    (async () => {
      try {
        const { data: s } = await supabase.auth.getSession();
        setSession(s.session || null);

        const { data: u } = await supabase.auth.getUser();
        const uid = u.user?.id;
        if (!uid) { setMsg('No user. Go to /signup or /login.'); return; }

        const { data: prof } = await supabase.from('profiles').select('*').eq('user_id', uid).maybeSingle();
        setProfile(prof || null);

        const { data: ent } = await supabase.from('entitlements').select('*').eq('user_id', uid).maybeSingle();
        setEntitlement(ent || null);

        // child (self if child_user_id = uid) OR children where parent_user_id = uid
        const { data: kids1 } = await supabase.from('children').select('*').eq('child_user_id', uid);
        const { data: kids2 } = await supabase.from('children').select('*').eq('parent_user_id', uid);
        setChildren([...(kids1 || []), ...(kids2 || [])]);

        setMsg('OK');
      } catch (e: any) {
        setMsg(e.message || String(e));
      }
    })();
  }, []);

  return (
    <main style={{ padding: 24, fontFamily: 'system-ui' }}>
      <h1>Debug /me</h1>
      <p>Status: {msg}</p>
      <h2>Session</h2>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <h2>Profile</h2>
      <pre>{JSON.stringify(profile, null, 2)}</pre>
      <h2>Entitlement</h2>
      <pre>{JSON.stringify(entitlement, null, 2)}</pre>
      <h2>Children (linked to me)</h2>
      <pre>{JSON.stringify(children, null, 2)}</pre>
    </main>
  );
}
