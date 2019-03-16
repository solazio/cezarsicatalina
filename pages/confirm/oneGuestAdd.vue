<template>
  <div>
    <form>
      <v-layout row wrap pb-2>
        <v-flex>
          <div class="title font-weight-light">Și încă câteva întrebări:</div>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
      <v-layout column>
        <v-flex xs12 pa-1 @click="displaySelection" id="cazare">
          <v-switch
            v-model="cazare"
            :label="'Noi am găsit câteva cazări aproximativ aproape de locație (11km). Vrei să stai acolo?'"
          ></v-switch>
        </v-flex>
        <v-flex xs12 pa-1 @click="displaySelection" id="transport">
          <v-switch
            v-model="transport"
            :label="'De asemenea o să punem la dispoziție și transport care va pleca din Piața Victoriei și va trece pe la cazare și apoi la locație. Evident și retur după nuntă (sunt 26 km din P.Victoriei). Vrei să vii așa?'"
          ></v-switch>
        </v-flex>
        <v-flex xs12 pa-1 @click="displaySelection" id="cununii">
          <v-switch
            v-model="cununii"
            :label="'La cununii ajungi? (ora 17.00 civila și 17.30 religioasa și au loc în același loc)'"
          ></v-switch>
        </v-flex>
        <v-flex xs12 pa-1 @click="displaySelection" id="copii">
          <v-switch v-model="copii" :label="'O să vii însoțit de copii? (dacă ai binențeles)'"></v-switch>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-btn round depressed color="accent" class="white--text" to="/confirm/guestOneDetails">
          <v-icon left>arrow_back</v-icon>Înapoi
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          round
          depressed
          color="accent"
          class="white--text"
          @click.prevent="sendDataToGoogleSheets"
          :disabled="disabledButton"
        >Trimite
          <v-icon right>send</v-icon>
        </v-btn>
      </v-layout>
    </form>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'
import Axios from 'axios'

const API_URL = 'https://cezarsicatalina-server.herokuapp.com'

export default {
  data: () => ({
    disabledButton: false
  }),
  computed: {
    ...mapFields([
      'additionalInfo.cazare',
      'additionalInfo.transport',
      'additionalInfo.cununii',
      'additionalInfo.copii'
    ])
  },
  methods: {
    displaySelection(e) {
      const selection = this.$store.state.additionalInfo[e.currentTarget.id]
      this.$toast.info(`Ai selectat: ${selection ? 'Da' : 'Nu'}`, {
        theme: 'bubble',
        duration: 1000,
        containerClass: 'toast-custom',
        icon: {
          name: 'thumb_up',
          after: false
        },
        type: 'error'
      })
    },
    sendDataToGoogleSheets() {
      this.disabledButton = true
      const self = this
      const dataToSend = {
        guestOneDetails: self.$store.state.guestOneDetails,
        guestTwoDetails: self.$store.state.guestTwoDetails,
        additionalInfo: self.$store.state.additionalInfo
      }

      Axios.post(`${API_URL}/newguest`, dataToSend)
        // Axios.post(`http://localhost:5000/newguest`, dataToSend)
        .then(function(response) {
          self.$toast.success(response.data.message, {
            theme: 'bubble',
            duration: 4000,
            containerClass: 'toast-custom',
            icon: {
              name: 'check_circle',
              after: false
            }
          })
          self.disabledButton = false
          self.$store.commit('reset')
          self.$router.push('/confirm/guestOneDetails')
        })
        .catch(function(error) {
          self.$toast.error(error.response.data.error, {
            theme: 'bubble',
            duration: 4000,
            containerClass: 'toast-custom',
            icon: {
              name: 'error',
              after: false
            }
          })
          self.disabledButton = false
          self.$router.push('/confirm/guestOneDetails')
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
.toast-custom {
  opacity: 0.95;
  font-family: 'Raleway', sans-serif;
}

@media only screen and (max-width: 720px) {
  .toast-custom {
    width: 100%;
  }
}

.toast-custom .toasted {
  border-radius: 6px !important;
  padding: 10px !important;
}

.toast-custom a {
  background: rgba(255, 255, 255, 1);
  color: #f44336 !important;
  border-radius: 8px;
  text-decoration: none !important;
}

.toast-custom a:hover {
  background: rgba(255, 255, 255, 0.9);
}
</style>
