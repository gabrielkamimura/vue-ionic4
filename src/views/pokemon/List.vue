<template>
  <ion-app>
   <!-- Searchbar in a Toolbar -->
    <ion-header>

      <ion-toolbar color="danger">
        <ion-title v-show="!searchEnabled">Pokémons</ion-title>
      </ion-toolbar>
      <ion-toolbar color="danger">
        <ion-searchbar :value="textToSearch" @ionChange="textToSearch = $event.target.value"></ion-searchbar>
      </ion-toolbar>
    </ion-header>
    <ion-content :scrollEvents="true">
      <ion-list>
        <ion-item v-for="pokemon in pokemons" @click="goToPokemon(pokemon.url)">
          <ion-label style="text-transform: capitalize;">{{ pokemon.name }}</ion-label>
        </ion-item>
      </ion-list>
      <ion-infinite-scroll threshold="100px" id="infinite-scroll">
        <ion-infinite-scroll-content
          loading-spinner="bubbles"
          loading-text="Loading more data...">
        </ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </ion-content>
  
  </ion-app>
  
</template>

<script>
  import Router from 'vue-router';
  import PokemonService from "../../services/PokemonService.js";
  
  export default {
    name: 'list',
    data: () => {
      return {
        textToSearch: "",
        pokemons: [],
        limit: 20, 
        offset: 0,
        searchEnabled: false
      };
    },
    
    created: function() {
      this.pokemons = [];
      this.loadData();
    },
    
    mounted: function() {
     
      const infiniteScroll = document.getElementById('infinite-scroll');

      infiniteScroll.addEventListener('ionInfinite', (event) => {
        setTimeout(() => {
          this.loadData().finally((r) => {
             event.target.complete();
            if (!r.data.next) {
              event.target.disabled = true;
            }
          });
        }, 500);
      });
      
    },
    
    methods: {
      loadData: function() {
         return new Promise ((resolve, reject) => {
           PokemonService.getAll(this.limit, this.offset)
            .then(response => {
               this.pokemons = this.pokemons.concat(response.data.results);                   
               this.offset = this.offset + 20;
              console.log(response)
              resolve(response);
           });
         });
      },
      
      goToPokemon: function(url) {
        this.$router.push({
          name:'pokemon-view',            
          params: {
            idPokemon: this.getPokemonId(url)
          }
        });
      },
      
      getPokemonId: url => url.substring(url.indexOf('pokemon/') + 'pokemon/'.length, url.lastIndexOf('/')),
    },
    
    computed: {
      
    }
  }
</script>