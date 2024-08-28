/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        moveVertical: 'moveVertical 30s ease infinite',
        moveInCircle: 'moveInCircle 20s reverse infinite',
        moveInCircle2: 'moveInCircle 40s linear infinite',
        moveHorizontal: 'moveHorizontal 40s ease infinite',
        moveInCircle3: 'moveInCircle 20s ease infinite',
      },
      keyframes: {
        moveVertical: {
          '0%, 100%': { transform: 'translateY(-50%)' },
          '50%': { transform: 'translateY(50%)' },
        },
        moveInCircle: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        moveHorizontal: {
          '0%, 100%': { transform: 'translateX(-50%)' },
          '50%': { transform: 'translateX(50%)' },
        },
      },
    },
  },
  plugins: [],
}

