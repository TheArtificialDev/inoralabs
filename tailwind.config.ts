import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // @ts-ignore - Safelist is not in the type definition but is a valid property
  safelist: [
    'font-satoshi-regular',
    'font-satoshi-medium',
    'font-satoshi-bold',
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
        'satoshi-regular': ['Satoshi', 'sans-serif'],
        'satoshi-medium': ['Satoshi', 'sans-serif'],
        'satoshi-bold': ['Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
