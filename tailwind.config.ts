import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      {
        hopetheme: {
          "primary": "#3A57E8",
          "secondary": "#6C757D",
          "success": "#1AA053",
          "danger": "#C03221",
          "warning": "#F16A1B",
          "info": "#079AA2",
          "light": "#DEE2E6",
          "dark": "#212529"
        }
      }
    ]
  },
  theme: {
    extend: {
      backgroundImage: {
        'side-background': "url('/background-side.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('daisyui')],
}
export default config
