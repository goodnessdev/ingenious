/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00f',
        secondary: {
          100: '#aaa',
          200: '#999'
        }
      },
      fontFamily: {
        quicksand: 'Quicksand',
        poppins: "Poppins",
        nunito: 'Nunito',
        afacadFlux: 'Afacad Flux'
      },
      keyframes: {
        spin360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-10%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'translateY(10%)',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
          },
        },
      },
      animation: {
        spin360: 'spin360 4s linear infinite',
        slowBounce: 'bounce 2s linear infinite'
      },
    },
  },
  plugins: [],
}

