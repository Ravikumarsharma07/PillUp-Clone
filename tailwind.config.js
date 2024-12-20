const { Component } = require('react')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include your files here
  ],
  theme: {
    extend: {
      transitionDelay: {
        '400': '400ms',
        '600':'600ms',
        '800':'800ms',
        '900':'900ms',
        '1100':'1100ms',
        '1200':'1200ms' 
      },
      screens: {
        'xsm': '400px'
      },
    },
  },
  plugins: [],
}

