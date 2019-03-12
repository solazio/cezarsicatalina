<template>
  <div>
    <v-layout row wrap pb-2>
      <v-flex>
        <div class="title font-weight-light">Acum avem nevoie de detaliile partenerei/ului:</div>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-layout row wrap>
      <v-flex xs12 md4 pa-1>
        <v-text-field
          v-model="lastName"
          :counter="15"
          :error-messages="lastNameErrors"
          label="*Nume de familie"
          required
          @input="$v.lastName.$touch()"
          @blur="$v.lastName.$touch()"
          color="accent"
        ></v-text-field>
      </v-flex>

      <v-flex xs12 md4 pa-1>
        <v-text-field
          v-model="firstName"
          :counter="15"
          :error-messages="firstNameErrors"
          label="*Prenume"
          required
          @input="$v.firstName.$touch()"
          @blur="$v.firstName.$touch()"
          color="accent"
        ></v-text-field>
      </v-flex>

      <v-flex xs12 md4 pa-1>
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="*Email"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
          color="accent"
        ></v-text-field>
      </v-flex>

      <v-flex xs12 md4 pa-1>
        <v-select
          v-model="selectDiet"
          required
          :items="$store.state.dietaryRequirements"
          :error-messages="selectDietErrors"
          @input="$v.selectDiet.$touch()"
          @blur="$v.selectDiet.$touch()"
          label="*Ce ar mănânca?"
          color="accent"
          light
        ></v-select>
      </v-flex>

      <v-flex xs12 md4 pa-1>
        <v-select
          v-model="selectAllergy"
          mt-0
          required
          attach
          small-chips
          multiple
          :items="$store.state.allergySelect"
          label="*Are alergii?"
          :error-messages="selectAllergyErrors"
          @input="$v.selectAllergy.$touch()"
          @blur="$v.selectAllergy.$touch()"
          color="accent"
        ></v-select>
      </v-flex>

      <v-flex xs12 md4 pa-1>
        <v-select
          v-model="selectWine"
          :items="$store.state.wineSelect"
          label="Ce culoare de vin crezi că o să consume mai mult?"
          color="accent"
        ></v-select>
      </v-flex>

      <v-flex xs12 md4 pa-1>
        <v-select
          v-model="selectLiquor"
          :items="$store.state.hardLiquorSelect"
          label="Dar tărie ce îi place mai mult?"
          color="accent"
        ></v-select>
      </v-flex>

      <v-flex xs12 md4 pa-1>
        <v-text-field
          v-model="cocktail"
          :counter="25"
          label="La ce cocktail visează?"
          :error-messages="cocktailErrors"
          @input="$v.cocktail.$touch()"
          @blur="$v.cocktail.$touch()"
          color="accent"
        ></v-text-field>
      </v-flex>

      <v-flex xs12 md4 pa-1>
        <v-text-field
          v-model="song"
          :counter="25"
          label="Ce melodia o/îl ridică la dans?"
          :error-messages="songErrors"
          @input="$v.song.$touch()"
          @blur="$v.song.$touch()"
          color="accent"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row pb-1>
      <v-btn round depressed color="accent" dark to="/confirm/guestOneDetails">
        <v-icon dark left>arrow_back</v-icon>Înapoi
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        round
        depressed
        color="accent"
        class="white--text"
        to="/confirm/twoGuestsAdd"
        :disabled="disabledButton"
      >Înainte
        <v-icon right>arrow_forward</v-icon>
      </v-btn>
    </v-layout>
    <span class="font-weight-light">Toate câmpurile marcate cu * sunt obligatorii.</span>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
import { mapFields } from 'vuex-map-fields'

export default {
  mixins: [validationMixin],
  validations: {
    firstName: { required, maxLength: maxLength(15) },
    lastName: { required, maxLength: maxLength(15) },
    email: { required, email },
    selectDiet: { required },
    selectAllergy: { required },
    cocktail: { maxLength: maxLength(25) },
    song: { maxLength: maxLength(25) }
  },
  computed: {
    ...mapFields([
      'guestTwoDetails.firstName',
      'guestTwoDetails.lastName',
      'guestTwoDetails.email',
      'guestTwoDetails.selectWine',
      'guestTwoDetails.selectLiquor',
      'guestTwoDetails.selectDiet',
      'guestTwoDetails.selectAllergy',
      'guestTwoDetails.cocktail',
      'guestTwoDetails.song'
    ]),
    firstNameErrors() {
      const errors = []
      if (!this.$v.firstName.$dirty) return errors
      !this.$v.firstName.maxLength &&
        errors.push('Prenumele trebuie sa fie maximum 15 de caractere')
      !this.$v.firstName.required && errors.push('Prenumele este necesar')
      return errors
    },
    lastNameErrors() {
      const errors = []
      if (!this.$v.lastName.$dirty) return errors
      !this.$v.lastName.maxLength &&
        errors.push('Numele de familie trebuie sa fie maximum 15 de caractere')
      !this.$v.lastName.required &&
        errors.push('Numele de familie este necesar')
      return errors
    },
    emailErrors() {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Adresa de e-mail nu este validă')
      !this.$v.email.required && errors.push('Adresa de email este necesară')
      return errors
    },
    selectDietErrors() {
      const errors = []
      if (!this.$v.selectDiet.$dirty) return errors
      !this.$v.selectDiet.required &&
        errors.push('Te rog să selectezi mâncarea')
      return errors
    },
    selectAllergyErrors() {
      const errors = []
      if (!this.$v.selectAllergy.$dirty) return errors
      !this.$v.selectAllergy.required &&
        errors.push('Te rog să selectezi "Nu" dacă nu are alergii')
      return errors
    },
    cocktailErrors() {
      const errors = []
      if (!this.$v.cocktail.$dirty) return errors
      !this.$v.cocktail.maxLength &&
        errors.push(
          'Numele cocktail-ului trebuie sa fie maximum 25 de caractere'
        )
      return errors
    },
    songErrors() {
      const errors = []
      if (!this.$v.song.$dirty) return errors
      !this.$v.song.maxLength &&
        errors.push('Numele câtencului trebuie sa fie maximum 25 de caractere')
      return errors
    },
    disabledButton() {
      if (
        !this.$store.state.guestTwoDetails.firstName ||
        !this.$store.state.guestTwoDetails.lastName ||
        !this.$store.state.guestTwoDetails.email ||
        !this.$store.state.guestTwoDetails.selectDiet ||
        !this.$store.state.guestTwoDetails.selectAllergy ||
        this.$v.$anyError
      ) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
