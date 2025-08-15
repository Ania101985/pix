// pages/api/profile/bootstrap.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerClient } from '../../../lib/supabaseServer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const supabase = getServerClient(req, res);

    // 1) who is this?
    const { data: { user }, error: userErr } = await supabase.auth.getUser();
    if (userErr) throw userErr;
    if (!user) return res.status(401).json({ error: 'not_authenticated' });

    const desiredRole = (user.user_metadata?.desired_role as string) || 'parent';
    const displayName =
      (user.user_metadata?.nickname as string) ||
      (user.user_metadata?.name as string) ||
      user.email?.split('@')[0] ||
      'Player';

    // 2) profiles: upsert by user_id
    const { error: profErr } = await supabase
      .from('profiles')
      .upsert(
        { user_id: user.id, role: desiredRole, display_name: displayName },
        { onConflict: 'user_id' }
      );
    if (profErr) throw profErr;

    // 3) children (only if role=child): upsert by unique child_user_id
    if (desiredRole === 'child') {
      const { error: childErr } = await supabase
        .from('children')
        .upsert(
          { child_user_id: user.id, nickname: displayName, locale: 'en' },
          { onConflict: 'child_user_id' }
        );
      if (childErr) throw childErr;
    }

    // 4) entitlements: upsert by user_id
    const { error: entErr } = await supabase
      .from('entitlements')
      .upsert(
        { user_id: user.id, tier: 'free' },
        { onConflict: 'user_id' }
      );
    if (entErr) throw entErr;

    return res.status(200).json({ ok: true });
  } catch (e: any) {
    console.error('bootstrap error:', e?.message || e);
    res.status(400).json({ error: String(e?.message || e) });
  }
}
