import React, { useEffect } from 'react'
import { getPokemons } from './store/slices/pokemon'
import {useDispatch, useSelector} from 'react-redux';

export const PokemonApp = () => {

    const dispatch = useDispatch();
    const {pokemons, page, isLoading } = useSelector(state => state.pokemons);

    useEffect(()=> {
      dispatch(getPokemons());
    }, [])
    

    return (
        <>
            <h1>Pokemon APP</h1>
            <hr />
            <span>Is Loading {isLoading ? 'True': 'False'}</span>
            <ul>
              {
                pokemons.map(pokemon => {
                    return <li style={{textTransform: 'capitalize'}} key={pokemon.name}>{pokemon.name}</li>
                })
              }
            </ul>

            <button
                disabled={isLoading}
                onClick={() => dispatch(getPokemons(page))}
            >Next</button>
        </>
    )
}
