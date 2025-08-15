import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient'; // or default import

export default function SupaDebug() {
  const [out, setOut] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.from('activity_attempts').select('*').limit(1);
      setOut({ data, error });
    })();
  }, []);

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Supabase Client Test</h1>
      <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto">
        {JSON.stringify(out, null, 2)}
      </pre>
    </main>
  );
}
