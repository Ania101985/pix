// pages/signup.tsx
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabaseClient';

type Role = 'child' | 'parent' | 'instructor' | 'org_admin';

export default function Signup() {
  const router = useRouter();
  const [role, setRole] = useState<Role>('child');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState(''); // used if role = 'child'
  const [msg, setMsg] = useState('');

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setMsg('Creating account…');

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { desired_role: role, nickname },
        // 👇 This is Step 3: send verification links to the callback page
        emailRedirectTo: 'http://localhost:3000/auth/callback',
      },
    });

    if (error) {
      setMsg(error.message);
      return;
    }
    setMsg('Account created! Check your email and click the link to verify.');
  }

  return (
    <main style={{ padding: 24, fontFamily: 'system-ui' }}>
      <h1>Create account</h1>
      <form onSubmit={onSubmit} style={{ display: 'grid', gap: 12, maxWidth: 360 }}>
        <label>
          Role:
          <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
            {(['child', 'parent', 'instructor', 'org_admin'] as Role[]).map((r) => (
              <label key={r} style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                <input
                  type="radio"
                  name="role"
                  value={r}
                  checked={role === r}
                  onChange={() => setRole(r)}
                />
                {r}
              </label>
            ))}
          </div>
        </label>

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

        {role === 'child' && (
          <input
            placeholder="Nickname (for the child)"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            style={{ padding: 10 }}
          />
        )}

        <button style={{ padding: 10, border: '1px solid #ccc' }}>Sign up</button>
      </form>

      {msg && <p style={{ marginTop: 12 }}>{msg}</p>}

      <p style={{ marginTop: 16 }}>
        Already have an account? <a href="/login">Log in</a>
      </p>
    </main>
  );
}
