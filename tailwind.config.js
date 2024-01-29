/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const textClasses = require('./tailwind/textClasses')
module.exports = {
  mode: 'jit',
  content: [
    'node_modules/tailvue/dist/tailvue.es.js'
  ],
  theme: {
    name: 'main',
    colors: {
      primary: {
        dark: '#3D8C8C',
        light: '#009EFE'
      },
      white: '#FFFFFF',
      black: {
        light: '#2C2B2E',
        dark: '#000000'
      },
      gray: {
        light: '#818487',
        dark: '#F4F6F8'
      },
      flue: '#6AD300',
      transparent: 'transparent'
    },
    screens: {
      sm: '100%',
      lg: '1310px'
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          lg: '0'
        }
      },
      fontFamily: {
        sans: ['Larken'],
        serif: ['IBM Plex Sans'],
        mono: ['Lato']
      },
      boxShadow: {
        cta: '0px 8px 32px 0px rgba(37, 79, 109, 0.24)'
      }
    }
  },
  plugins: [
    'postcss-import',
    textClasses
  ]
}
