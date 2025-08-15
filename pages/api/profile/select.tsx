import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import { useRouter } from 'next/router';

type Child = {
  id: string;
  nickname: string;
};

export default function ProfileSelect() {
  const router = useRouter();
  const [children, setChildren] = useState<Child[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/login');
        return;
      }
      const { data } = await supabase
        .from('children')
        .select('*')
        .eq('parent_user_id', user.id)
        .order('nickname');
      setChildren(data || []);
      setLoading(false);
    })();
  }, [router]);

  async function addChild() {
    const nickname = window.prompt('Child nickname?');
    if (!nickname) return;
    const { data: { user } } = await supabase.auth.getUser();
    await supabase.from('children').insert({
      parent_user_id: user.id,
      nickname,
      locale: 'en',
    });
    location.reload();
  }

  if (loading) return <main style={{ padding: 24 }}>Loading…</main>;

  return (
    <main style={{ padding: 24, fontFamily: 'system-ui' }}>
      <h1>Choose a child profile</h1>
      <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', marginTop: 16 }}>
        {children.map((c) => (
          <button key={c.id} style={{ border: '1px solid #ddd', borderRadius: 12, padding: 16 }}
                  onClick={() => router.push(`/preview?child=${c.id}`)}>
            <div style={{ fontSize: 28, background: '#f5f5f5', width: 64, height: 64, borderRadius: '50%',
                         display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
              {c.nickname?.charAt(0).toUpperCase()}
            </div>
            <div style={{ marginTop: 8, textAlign: 'center', fontWeight: 600 }}>{c.nickname}</div>
          </button>
        ))}
        <button onClick={addChild} style={{ border: '1px dashed #bbb', borderRadius: 12, padding: 16 }}>+ Add child</button>
      </div>
    </main>
  );
}
