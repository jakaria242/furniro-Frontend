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
        'bannerBox': '#FFF3E3',
        'smallText': '#333333',
        'boxH': "#B88E2F"
      },
      maxWidth: {
        'container': '1240px',
      },
      padding: {
        '30': '30px',
        '50': '50px',
        '60': '60px',
        '62': '62px',
        '158': '158px',
      },
      // fontSize: {
      //   '28': '18px',
      // },
      gap: {
        '35': '35px',
        '60': '60px',
        '50': '50px',
        '40': '40px',
      },
      height: {
        '716': '716px',
      },
      width: {
        '460': '460px',
        '546': '546px',
      },
      fontSize: {
        '52': '52px',
        '32': '32px',
      }
    },
  },
  plugins: [],
};
