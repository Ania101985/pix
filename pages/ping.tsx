import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function Ping() {
  const [ok, setOk] = useState<string>('checking...');

  useEffect(() => {
    supabase.from('profiles').select('*').limit(1).then(({ error }) => {
      setOk(error ? `Supabase reachable ✔ (table may not exist yet): ${error.message}` : 'Supabase reachable ✔');
    }).catch(e => setOk(`Error: ${String(e)}`));
  }, []);

  return <div style={{ padding: 24, fontFamily: 'sans-serif' }}>
    <h1>Ping Supabase</h1>
    <p>{ok}</p>
  </div>;
}
