import { create } from 'zustand'
import { IPokemonDetailResponse } from '@/interface/pokemonDetail'  

const InitStore = {
    pokemon:{
        data:[],
        loading:false,
        error:null,
    },
    fetchPokemon:{
        data:[],
        loading:false,
        error:null,
    },
}

type pokemonType = {
    data:IPokemonDetailResponse[];
    loading:boolean;
    error:null | any,
}

type UsePokemonListStoreType = {
    pokemon: pokemonType,
    fetchPokemon: pokemonType,
    setPokemonList:(value:pokemonType) => void,
    setfetchPokemonList:(value:pokemonType) => void,
    clearPokemon:()=>void,
  
}


export const usePokemonListStore = create<UsePokemonListStoreType>((set) => ({
  ...InitStore,
  setPokemonList:(value:pokemonType) => set({pokemon:value}),
  setfetchPokemonList:(value:pokemonType) => set({fetchPokemon:value}),
  clearPokemon:()=>set({...InitStore})
  
}))

