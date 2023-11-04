import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/elements/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      {
        hopetheme: {
          "primary": "#3A57E8",
          "secondary": "#6C757D",
          "accent": "#1dcdbc",
          "neutral": "#2b3440",
          "base-100": "#ffffff",
          "info": "#079AA2",
          "success": "#1AA053",
          "warning": "#F16A1B",
          "error": "#C03221",
          "light": "#DEE2E6",
          "dark": "#212529"
        }
      },
      "dark", "light"
    ]
  },
  plugins: [require('daisyui')],
}
export default config
