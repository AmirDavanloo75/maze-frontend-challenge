/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{vue,js,ts}",
    "./components/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        yekan: ['Yekan Bakh', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f4ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          700: '#334155',
          900: '#0f172a',
        },
        success: '#10b981',
        warning: '#f59e0b',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '2rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        }
      }
    },
  },
  plugins: [],
}