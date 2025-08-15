import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerClient } from '../../../lib/supabaseServer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const supabase = getServerClient(req, res);

    if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

    const { access_token, refresh_token, signout } = req.body || {};

    if (signout) {
      await supabase.auth.signOut(); // clears cookies
      return res.status(200).json({ ok: true });
    }

    if (!access_token || !refresh_token) {
      return res.status(400).json({ error: 'missing_tokens' });
    }

    const { error } = await supabase.auth.setSession({ access_token, refresh_token });
    if (error) return res.status(400).json({ error: error.message });

    return res.status(200).json({ ok: true });
  } catch (e: any) {
    console.error('auth/sync error:', e?.message || e);
    return res.status(500).json({ error: String(e?.message || e) });
  }
}
