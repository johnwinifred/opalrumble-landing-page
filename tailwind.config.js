/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        typing: {
          from: { width: '0%' },
          to: { width: '50%' },
        },
        'blink-caret':{
           '0%, 50%': { borderColor: 'transparent' },
          // '50%': { borderColor: 'black' },
        },
        'fade-out-caret': {
          '0%, 90%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
      animation:{
        typing: 'typing 4s steps(10, end) ',
        'blink-caret':'blink-caret 0.75s step-end',
        'fade-out-caret': 'fade-out-caret 4s steps(40, end) forwards',
      },

    },
  },
  plugins: [],
}