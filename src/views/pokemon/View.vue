<template>
  <ion-app>
   <!-- Searchbar in a Toolbar -->
    <ion-header>

      <ion-toolbar color="danger">
        <ion-buttons slot="start">
          <ion-back-button defaulthref=""></ion-back-button>
        </ion-buttons>
        <ion-title style="text-transform: capitalize;">{{ pokemon.name }}</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :scrollEvents="true">
      {{ pokemon }}
    </ion-content>
  
  </ion-app>
  
</template>

<script>
  
  import PokemonService from "../../services/PokemonService.js";
  
  export default {
    name: 'list',
    data: () => {
      return {
        pokemon: ""
      };
    },
    
    created: function() {
      this.loadData();
    },
    
    mounted: function() {
     
    },
    
    methods: {
      loadData: function() {
         PokemonService.get(this.$route.params.idPokemon)
          .then(r => this.pokemon = r.data);
      },
      
    },
    
    computed: {
      
    }
  }
</script>