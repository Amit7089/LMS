/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        'course-deatails-heading-small': ['26px','36px'],
        'course-deatails-heading-large': ['36px','44px'],
        'home-heading-small': ['32px', '40px'],
        'home-heading-large': ['48px', '56px'],
        'default': ['16px', '24px'],
        'default-small': ['14px', '20px'],
      },
      gridTemplateColumns: {
        'auto' : 'repeat(auto-fit, minmax(250px, 1fr))',
      },

      spacing : {
        'section-height' : '500px',
      }


    },

  },
  plugins: [],
}