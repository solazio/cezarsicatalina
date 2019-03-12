<template>
  <div>
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
          :label="'Noi am găsit câteva cazări aproximativ aproape de locație (11km). Vrei să stați acolo?'"
        ></v-switch>
      </v-flex>
      <v-flex xs12 pa-1 @click="displaySelection" id="transport">
        <v-switch
          v-model="transport"
          :label="'De asemenea o să punem la dispoziție și transport care va pleca din Piața Victoriei și va trece pe la cazare și apoi la locație. Evident și retur după nuntă (sunt 26 km din P.Victoriei). Vreți să veniți așa?'"
        ></v-switch>
      </v-flex>
      <v-flex xs12 pa-1 @click="displaySelection" id="cununii">
        <v-switch
          v-model="cununii"
          :label="'La cununii ajungeți? (ora 17.00 civila și 17.30 religioasa și au loc în același loc)'"
        ></v-switch>
      </v-flex>
      <v-flex xs12 pa-1 @click="displaySelection" id="copii">
        <v-switch v-model="copii" :label="'O să veniți însoțiți de copii? (dacă aveți binențeles)'"></v-switch>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-btn round depressed color="accent" class="white--text" to="/confirm/guestTwoDetails">
        <v-icon class="white--text" left>arrow_back</v-icon>Înapoi
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        round
        depressed
        color="accent"
        class="white--text"
        @click="sendDataToGoogleSheets"
        :disabled="disabledButton"
      >Trimite
        <v-icon class="white--text" right>send</v-icon>
      </v-btn>
    </v-layout>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields'

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
      this.$toast.success('Ai fost inregistrat cu succes!', {
        theme: 'bubble',
        duration: 4000,
        containerClass: 'toast-custom',
        icon: {
          name: 'check_circle',
          after: false
        }
      })
      // const dataToSend = ''
      // const self = this
      // Axios.post(`${API_URL}/newguest`, dataToSend)
      //   .then(function(response) {
      //     self.$toast.success(response.data.message)
      //     self.disabledButton = false
      //   })
      //   .catch(function(error) {
      //     self.$toast.error(error.response.data.error)
      //     self.disabledButton = false
      //   })
    }
  }
}
</script>
