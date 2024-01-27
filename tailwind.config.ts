import type { Config } from 'tailwindcss'
import textClasses from './tailwind/textClasses'
import { colors, screens, containers, fonts, boxShadows } from './tailwind/variables'
export default <Partial<Config>>{
  mode: 'jit',
  important: true,
  theme: {
    colors,
    screens,
    extend: {
      container: containers,
      fontFamily: fonts,
      boxShadow: boxShadows
    }
  },
  plugins: [
    'postcss-import',
    textClasses
  ]
}
