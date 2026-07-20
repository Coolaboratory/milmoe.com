/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Instrument Sans"', 'sans-serif'],
        body: ['"Public Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      colors: {
        dark: '#0F1117',
        light: '#F5F4F0',
        'text-dark': '#FAFAFA',
        'text-light': '#212121',
        accent: '#BF6B69',
      },
      maxWidth: {
        prose: '720px',
        tight: '640px',
        teaching: '560px',
      },
    },
  },
  plugins: [],
}
