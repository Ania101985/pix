// /pages/api/academy/classes.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/lib/supabaseClient';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { data, error } = await supabase.from('classes').select('*');
    if (error) return res.status(500).json({ error: error.message }); return res.json(data);
  }
  if (req.method === 'POST') {
    const { data, error } = await supabase.from('classes').insert(req.body).select('*');
    if (error) return res.status(500).json({ error: error.message }); return res.json(data);
  }
  res.status(405).end();
}
