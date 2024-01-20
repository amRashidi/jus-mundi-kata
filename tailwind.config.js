import textClassses from './tailwind/textClasses';
import mainTheme from './tailwind/mainTheme';
import { container } from './tailwind/variables';
export default {
  mode: 'jit',
  theme: {
    ...mainTheme,
  },
  extend: {
    container,
  },
  plugins: [
    textClassses
  ]
};
