import supabase from '@/utils/supabaseClient';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const { error } = await supabase.from('subscribers').insert([{ email }]);
  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ message: 'Successfully subscribed!' });
}
