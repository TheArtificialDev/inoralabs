import supabase from '@/utils/supabaseClient';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    console.log('Contact API called with body:', req.body);
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      console.log('Required fields missing in contact form request');
      return res.status(400).json({ error: 'All fields are required' });
    }

    try {
      console.log('Attempting to insert contact form data into Supabase');
      
      // Try inserting with the subject field first
      const { data: firstAttemptData, error: firstAttemptError } = await supabase.from('contact_us').insert([{ 
        name, 
        email, 
        subject: subject || '', 
        message 
      }]);

      // If there's an error related to the subject column, try again without it
      if (firstAttemptError && firstAttemptError.message?.includes('subject')) {
        console.log('Falling back to insert without subject field');
        const { data, error } = await supabase.from('contact_us').insert([{ 
          name, 
          email, 
          message 
        }]);

        if (error) {
          console.error('Supabase error on fallback attempt:', error);
          return res.status(500).json({ error: error.message });
        }

        console.log('Successfully submitted contact form for:', email);
        return res.status(200).json({ 
          message: 'Message sent successfully!',
          note: 'Consider running the alter-contact-table.sql script to add the subject column to your database.' 
        });
      }

      if (firstAttemptError) {
        console.error('Supabase error:', firstAttemptError);
        return res.status(500).json({ error: firstAttemptError.message });
      }

      console.log('Successfully submitted contact form for:', email);
      return res.status(200).json({ message: 'Message sent successfully!' });
    } catch (err) {
      console.error('Unexpected error in contact API:', err);
      return res.status(500).json({ error: 'An unexpected error occurred' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
