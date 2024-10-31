/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'footerH': '#9F9F9F',
      },
      maxWidth: {
        'container': '1240px',
      },
      padding: {
        '30': '30px',
        '50': '50px',
      },
      // fontSize: {
      //   '28': '18px',
      // },
      gap: {
        '35': '35px',
        '60': '60px',
        '50': '50px',
        '40': '40px',
      }
    },
  },
  plugins: [],
};
