/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import colors from 'vuetify/util/colors'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: colors.blue.darken2,
          secondary: colors.grey.darken1,
          accent: colors.shades.black,
          error: colors.red.accent3,
          background: '#FFFFFF',
          surface: colors.grey.lighten5,
        },
      },
      
      dark: {
        colors: {
          primary: colors.blue.darken2,
          secondary: colors.grey.darken1,
          accent: colors.deepOrange.accent4,
          error: colors.red.accent3,
          background: '#121212',
          surface: colors.deepPurple.accent4,
        },
      }
      
    },
  },
})
