import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: '#DA9FFB',
    accent: '#ffcc13',
    secondary: '#B048A4',
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3
  }
})

/* colors: #DA9FFB, #ffdb58, #EFF6EE, #BFC6D8, #B048A4 */
