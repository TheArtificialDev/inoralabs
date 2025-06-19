import supabase from '@/utils/supabaseClient';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    console.log('Careers API called with body:', req.body);
    const { name, email, portfolio, interests, experience } = req.body;

    if (!name || !email) {
      console.log('Required fields missing in careers form request');
      return res.status(400).json({ error: 'Name and email are required' });
    }

    try {
      console.log('Attempting to insert career application data into Supabase');
      
      // First try with all fields
      const { data: firstAttemptData, error: firstAttemptError } = await supabase.from('careers').insert([{ 
        name, 
        email, 
        resume_url: portfolio || '',
        interests: interests || '',
        experience: experience || ''
      }]);

      // If there's an error related to missing columns, try with just the base fields
      if (firstAttemptError && 
         (firstAttemptError.message?.includes('interests') || 
          firstAttemptError.message?.includes('experience'))) {
        
        console.log('Falling back to insert with only basic fields');
        const { data, error } = await supabase.from('careers').insert([{ 
          name, 
          email, 
          resume_url: portfolio || ''
        }]);

        if (error) {
          console.error('Supabase error on fallback attempt:', error);
          return res.status(500).json({ error: error.message });
        }

        console.log('Successfully submitted career application for:', email);
        return res.status(200).json({ 
          message: 'Application submitted successfully!',
          note: 'Please run the alter-careers-table.sql script to add the additional columns to your database.' 
        });
      }

      if (firstAttemptError) {
        console.error('Supabase error:', firstAttemptError);
        return res.status(500).json({ error: firstAttemptError.message });
      }

      console.log('Successfully submitted career application for:', email);
      return res.status(200).json({ message: 'Application submitted successfully!' });
    } catch (err) {
      console.error('Unexpected error in careers API:', err);
      return res.status(500).json({ error: 'An unexpected error occurred' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
