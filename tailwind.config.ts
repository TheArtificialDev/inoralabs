import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // @ts-ignore - Safelist is not in the type definition but is a valid property
  safelist: [
    'font-inter',
    'font-ibm-plex',
    'font-ibm-plex-mono',
    'text-quantum-blue',
    'bg-quantum-blue',
    'text-pulse-teal',
    'bg-pulse-teal',
    'text-signal-violet',
    'bg-signal-violet',
    'text-obsidian-black',
    'bg-obsidian-black',
    'text-fog-gray',
    'bg-fog-gray',
  ],
  theme: {
    extend: {
      colors: {
        'quantum-blue': '#1B1F3B',
        'pulse-teal': '#1ABC9C',
        'signal-violet': '#7F38EC',
        'obsidian-black': '#0F0F0F',
        'fog-gray': '#ECEFF1',
      },      fontFamily: {
        'inter': ['var(--font-inter)', 'sans-serif'],
        'ibm-plex': ['var(--font-ibm-plex-sans)', 'sans-serif'],
        'ibm-plex-mono': ['var(--font-ibm-plex-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
