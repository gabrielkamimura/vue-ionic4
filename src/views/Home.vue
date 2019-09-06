<template>
  <div class="home">    
    <ion-card>
      <ion-img :src="imgSrc"></ion-img>
      <ion-card-header>
        <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
        <ion-card-title>Ionic 4 card component</ion-card-title>
      </ion-card-header>

      <ion-card-content>
        Keep close to Nature's heart... and break clear away, once in awhile,
        and climb a mountain or spend a week in the woods. Wash your spirit clean.
      </ion-card-content>
    </ion-card>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data: () => {
    return {
      imgSrc: 'https://images.pexels.com/photos/2170473/pexels-photo-2170473.jpeg?cs=srgb&dl=beautiful-mobile-wallpaper-motion-2170473.jpg&fm=jpg'
    }
  }
}
</script>
