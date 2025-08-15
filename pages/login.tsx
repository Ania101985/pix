import { useState, FormEvent } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setMsg('Logging in…');

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setMsg(error.message);
      return;
    }

    await fetch('/api/profile/bootstrap', { method: 'POST' });

    const { data: userRes } = await supabase.auth.getUser();
    const userId = userRes?.user?.id;

    if (!userId) return;

    const { data: prof } = await supabase
      .from('profiles')
      .select('role')
      .eq('user_id', userId)
      .single();

    switch (prof?.role) {
      case 'child':
        router.push('/preview');
        break;
      case 'parent':
        router.push('/profile/select');
        break;
      case 'instructor':
      case 'org_admin':
        router.push('/academy');
        break;
      default:
        router.push('/');
    }
  }

  return (
    <main style={{ padding: 24, fontFamily: 'system-ui' }}>
      <h1>Log in</h1>
      <form onSubmit={onSubmit} style={{ display: 'grid', gap: 12, maxWidth: 360 }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: 10 }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: 10 }}
        />
        <button style={{ padding: 10 }}>Log in</button>
      </form>
      {msg && <p>{msg}</p>}
      <p>
        New here? <a href="/signup">Create account</a>
      </p>
    </main>
  );
}
