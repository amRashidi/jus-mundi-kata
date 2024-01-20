import plugin from 'tailwindcss/plugin'
import {
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight
} from './tailwind/variables'

const classPrefix = 'text-'

const { Larken, IBM, Lato } = fontFamily
const { regular, medium, bold, extraBold } = fontWeight

const titleClasses = {
  'title-xxl': {
    fontWeight: extraBold,
    lineHeight: lineHeight[11],
    fontSize: fontSize[500],
    fontFamily: Larken,
    letterSpacing: '-1px'
  },

  'title-xl': {
    fontWeight: regular,
    lineHeight: lineHeight[12],
    fontSize: fontSize[200],
    fontFamily: Larken,
    letterSpacing: '-.5px'
  },

  'title-xs': {
    fontWeight: bold,
    lineHeight: lineHeight[17],
    fontSize: fontSize[125],
    fontFamily: IBM
  },

  'body-lg': {
    fontWeight: regular,
    lineHeight: lineHeight[17],
    fontSize: fontSize[125],
    fontFamily: IBM
  },

  'body-md': {
    fontWeight: regular,
    lineHeight: lineHeight[15],
    fontSize: fontSize[100],
    fontFamily: IBM
  },

  'body-sm': {
    fontWeight: medium,
    lineHeight: lineHeight[13],
    fontSize: fontSize[75],
    fontFamily: Lato,
    letterSpacing: '2px'
  },

  cta: {
    fontWeight: medium,
    fontSize: fontSize[87],
    fontFamily: Lato,
    letterSpacing: '2px'
  },

  'cta-bold': {
    fontWeight: bold,
    lineHeight: lineHeight[13],
    fontSize: fontSize[87],
    fontFamily: Lato,
    letterSpacing: '2px'
  }
}

const addPrefix = classes =>
  Object.fromEntries(Object.entries(classes).map(([key, value]) => [`.${classPrefix}${key}`, value]))

export default {
  ...plugin(({ addComponents }) =>
    addComponents({
      ...addPrefix(titleClasses)
    })
  ),
  titleClasses
}
