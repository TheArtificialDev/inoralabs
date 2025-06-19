# Deployment Guide for INORA LABs Website

## Local Setup

1. Ensure Node.js 18+ is installed
2. Install dependencies:
   ```
   npm install
   ```
3. Build the project:
   ```
   npm run build
   ```
4. Start the production server:
   ```
   npm start
   ```

## Vercel Deployment

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Sign up or log in to [Vercel](https://vercel.com)

3. Click "Add New" > "Project"

4. Import your Git repository

5. Configure the project:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: npm run build
   - Output Directory: .next
   - Install Command: npm install

6. Environment Variables:
   - Add any necessary environment variables for your Supabase connection in the Vercel dashboard
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY

7. Click "Deploy"

## Custom Domain Setup

1. In your Vercel project dashboard, go to "Settings" > "Domains"

2. Add your domain: `inoralabs.tech`

3. Follow Vercel's instructions to verify domain ownership:
   - Option 1: Add DNS records to your domain provider
   - Option 2: Transfer your domain to Vercel

4. Wait for DNS propagation (may take up to 48 hours)

5. Enable HTTPS and ensure all traffic is redirected to HTTPS

## Troubleshooting

If you encounter issues with the fonts, make sure:
1. Font files are properly placed in the `/public/fonts` directory
2. The CSS has correct `@font-face` declarations
3. Font paths are correctly referenced in the CSS

If you encounter Edge runtime errors with the icon:
1. Remove the `src/app/icon.tsx` file 
2. Make sure favicon.ico is present in the public directory
3. Update the next.config.js as necessary

For any other deployment issues, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).
