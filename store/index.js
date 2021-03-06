import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields'
import VuexReset from '@ianwalter/vuex-reset'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    plugins: [VuexReset()],
    strict: true,
    state: {
      guestOneDetails: {
        firstName: '',
        lastName: '',
        email: '',
        selectWine: null,
        selectLiquor: null,
        selectDiet: null,
        selectAllergy: [],
        cocktail: '',
        song: '',
        selectInsotit: null
      },
      guestTwoDetails: {
        firstName: '',
        lastName: '',
        email: '',
        selectWine: null,
        selectLiquor: null,
        selectDiet: null,
        selectAllergy: [],
        cocktail: '',
        song: ''
      },
      additionalInfo: {
        cazare: false,
        transport: false,
        cununii: false,
        copii: false
      },

      wineSelect: ['Roșu', 'Roze', 'Alb'],
      hardLiquorSelect: ['Vodka', 'Rom', 'Wiskey', 'Gin'],
      dietaryRequirements: [
        'Omnivor',
        'Vegetarian',
        'Lacto-ovo-vegetarian',
        'Vegan',
        'Raw-vegan'
      ],
      allergySelect: ['Nu', 'Soia', 'Alune', 'Lactate', 'Gluten', 'Ouă'],
      insotitSelect: ['Da', 'Nu']
    },
    getters: {
      getField
    },
    mutations: {
      reset: () => {},
      updateField
    }
  })

export default store
