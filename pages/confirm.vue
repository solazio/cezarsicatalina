<template>
  <v-layout row wrap justify-center align-center>
    <v-flex xs12 sm12>
      <v-card light elevation="20">
        <v-card-text>
          <NuxtChild/>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  transition: 'page',

  data: () => ({
    // 1-data for main guest, 2-additional data for one guest, 3-data for second guest, 4-additional data for two guests
    dataInput: 2
  }),
  methods: {
    submitData() {
      alert('Data has been submitted')
    }
  },
  nextComponent() {},
  previousComponent() {}
}
</script>
