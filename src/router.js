import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PokemonList from './views/pokemon/List.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'pokemon-list',
      component: PokemonList
    },
    {
      path: '/pokemon/:idPokemon',
      name: 'pokemon-view',
      component: () => import(/* webpackChunkName: "about" */ './views/pokemon/View.vue')
    }
  ]
})
