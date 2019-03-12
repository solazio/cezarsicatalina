<template>
  <v-app light>
    <v-content class="my-background">
      <v-container fluid flat>
        <v-layout row wrap>
          <v-flex mb-3 xs12 sm11 justify-end text-sm-right>
            <v-btn dark flat round small class="my-menu-button" to="/">Acasa</v-btn>
            <v-btn
              dark
              flat
              round
              small
              class="my-menu-button"
              to="/confirm/guestOneDetails"
            >Confirmă</v-btn>
            <!-- <v-btn dark flat round small class="my-menu-button">Contact</v-btn> -->
          </v-flex>
        </v-layout>
      </v-container>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {}
</script>

<style scoped>
.my-background {
  background: #da9ffb; /* fallback for old browsers */
  background-image: linear-gradient(
    to right bottom,
    #b048a4,
    #b859b5,
    #c06ac5,
    #c87ad6,
    #d08ae6,
    #d08ae6,
    #d08ae6,
    #d08ae6,
    #c87ad6,
    #c06ac5,
    #b859b5,
    #b048a4
  );
}
.my-menu-button {
  font-weight: 300;
  letter-spacing: 2px;
}
</style>
