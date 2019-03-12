<template>
  <v-layout row wrap justify-center align-center>
    <v-card v-if="!hiddenVideo" elevation="20" class="my-text pr-3 pl-3">
      <v-card-title primary-title class="pb-0 headline font-weight-light">Salut!</v-card-title>
      <v-card-text class="subheading font-weight-light">
        Suntem noi,
        <a
          href="https://www.facebook.com/catalina.diaconu.92"
          class="font-weight-regular"
        >Cătălina</a> și
        <a href="https://www.facebook.com/cezar.vladut" class="font-weight-regular">Cezar</a> și cum ne iubim atât de mult ne-am decis să ne petrecem restul vieții împreună. Acum ceva timp universul a fost din nou de partea noastră și am identificat locația perfectă pentru a ne căsători. Ne dorim să ne fii alături la petrecerea noastră care va avea tema Nuntă în grădină. Locația despre care vorbim este
        <a
          href="https://www.google.com/maps/place/Mosia+Corbeanca/@44.6063943,26.0182124,18.75z/data=!4m5!3m4!1s0x40b21a6beaaaaaab:0x9df317e4c9d3a72f!8m2!3d44.6063836!4d26.0189029?shorturl=1"
        >Moșia Corbeanca</a>. Pentru că ne dorim să nu facem și mai mult rău mediului, meniul va fi bufet suedez și nici nu printăm invitații. Cununia civilă și cea religioasă vor acea loc în aceeași zi și în același loc începând de la ora 17.00. Mai jos aveți un chestionar care ne va ajuta pe noi să organizăm una din cele mai tari petreceri la care ai participat, așa că te rugăm să fii cât mai exact.
      </v-card-text>
      <v-layout row pt-3 pb-2>
        <v-btn color="accent" round outline nuxt @click="next">Vezi video</v-btn>
        <v-spacer/>
        <v-btn color="accent" round outline nuxt to="/confirm/guestOneDetails">Confirma</v-btn>
      </v-layout>
    </v-card>
    <div v-else class="video-container">
      <video id="video" allowfullscreen @ended="next">
        <source src="../static/nunta.mp4" type="video/mp4">
      </video>
      <v-btn
        color="accent"
        class="btn-play"
        round
        outline
        nuxt
        v-if="!hideButton"
        @click="playVideo"
      >
        <v-icon>play_arrow</v-icon>
      </v-btn>
      <v-btn color="accent" class="btn-video" round outline nuxt @click="next">
        <v-icon>arrow_forward</v-icon>
      </v-btn>
    </div>
  </v-layout>
</template>

<script>
export default {
  transition: 'page',
  components: {},
  data: () => ({
    hiddenVideo: true,
    hideButton: false
  }),
  methods: {
    next() {
      this.hiddenVideo = !this.hiddenVideo
      this.hideButton = false
    },
    playVideo() {
      document.getElementById('video').play()
      this.hideButton = true
    }
  }
}
</script>
<style scoped>
a {
  text-decoration: none;
}
.my-text {
  letter-spacing: 1px;
  font-weight: 300;
}
.video-container {
  position: relative;
}
#video {
  width: 100%;
  height: auto;
  border-radius: 0.15rem;
  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2),
    0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12);
}
.btn-play {
  position: absolute;
  left: 50%;
  margin-left: -44px;
  top: 50%;
  margin-top: -18px;
}

.btn-video {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}
.btn-video i {
  animation: slide 2s infinite;
}

.btn-video:hover i {
  animation: none;
}

@keyframes slide {
  0% {
    transform: translate(0, 0);
  }
  20% {
    transform: translate(10px, 0);
  }
  40% {
    transform: translate(0, 0);
  }
}
</style>
