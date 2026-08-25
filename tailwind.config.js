/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    // Overrides the default md breakpoint (768px -> 900px). Every 3-column
    // rail/card layout on the site (Header, Hero, Grid, OnePager, the work-
    // sample cards) keys off md: as its single mobile/desktop switch, so
    // this one change fixes the 768-899px squeeze (columns dropping to a
    // word or two wide, nav links clipping off the right edge) everywhere
    // at once instead of hand-picking a new breakpoint name per component.
    screens: {
      md: '900px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        display: ['"Instrument Sans"', 'sans-serif'],
        body: ['"Public Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      fontSize: {
        subhead: ['20px', '26px'],
      },
      colors: {
        dark: '#0F1117',
        light: '#EEECE6',
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
