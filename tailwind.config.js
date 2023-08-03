/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-cookies': "url('/hero-cookies.jpg')",
      },
      backgroundColor: {
        'default-10': '#feffff',
        'default-50': '#efe4db',
        'default-100': '#dfcab8',
        'default-200': '#d0b094',
        'default-300': '#c09671',
        'default-400': '#b07c4e',
        'default-500': '#8d633e',
        'default-600': '#6a4a2e',
        'default-700': '#46311f',
        'default-800': '#2d1f14',
        'default-900': '#1c130c',
        'default-950': '#0b0705',
      },
      textColor: {
        'default-10': '#feffff',
        'default-50': '#efe4db',
        'default-100': '#dfcab8',
        'default-200': '#d0b094',
        'default-300': '#c09671',
        'default-400': '#b07c4e',
        'default-500': '#8d633e',
        'default-600': '#6a4a2e',
        'default-700': '#46311f',
        'default-800': '#2d1f14',
        'default-900': '#1c130c',
        'default-950': '#0b0705',
      },
    },
  },
  plugins: [],
}
