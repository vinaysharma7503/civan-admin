/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      blue:'rgb(31, 126, 161)',
      bluelight:'rgba(204, 225, 251, 0.57)',
      gray:'#616161',
      graylight:'#c5c5c5',
      black:'#2F4858',
      white:'#fff',
      green:'#008B62',
      red:'#FF4045',
      yellow:'#FFBE3A'
    }
  },
  plugins: [],
}