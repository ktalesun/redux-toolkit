import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    page: 0,
    pokemons: [],
    isLoading: false
}

export const pokemonSlice = createSlice({
    name: 'pokemonSlice',
    initialState,
    reducers: {
        startLoadingPokemons: (state) => {
            state.isLoading = true;
        },

        setPokemons: (state, action) => {
            console.log(action)
        }
    }
});

export const {startLoadingPokemons, setPokemons } = pokemonSlice.actions

