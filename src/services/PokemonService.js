const axios = require('axios');

export default {
    name: 'PokemonService',
    
    getAll: (limit, offset) => {
        return new Promise((resolve, reject) => {
            axios
              .get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
              .then(r => {
                resolve(r);
             }).catch(r => reject(r));
        })
        
    },
    
    get: (idPokemon) => {
        return new Promise((resolve, reject) => {
            axios
              .get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
              .then(r => {
                resolve(r);
             }).catch(r => reject(r));
        })
        
    },
}