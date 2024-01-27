/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')
const {
  fontFamily: { Larken, IBM, Lato }, fontWeight: { regular, medium, bold, extraBold }, fontSize
  , lineHeight
} = require('./variables')

const classPrefix = 'text-'
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

  'body-semi': {
    fontWeight: bold,
    lineHeight: lineHeight[15],
    fontSize: fontSize[100],
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

  'cta-main': {
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
  },

  qoute: {
    fontWeight: regular,
    lineHeight: lineHeight[20],
    fontSize: fontSize[100],
    fontFamily: Larken
  }
}

const addPrefix = classes =>
  Object.fromEntries(Object.entries(classes).map(([key, value]) => [`.${classPrefix}${key}`, value]))

module.exports = {
  ...plugin(({ addComponents }) =>
    addComponents({
      ...addPrefix(titleClasses)
    })
  )
}
