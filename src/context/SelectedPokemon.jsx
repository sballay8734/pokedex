import { createContext, useState } from "react";

const PokemonContext = createContext()

function PokemonProvider({children}) {
  const [pokeOne, setPokeOne] = useState(null)
  const [pokeTwo, setPokeTwo] = useState(null)

  function handlePokeSelect(poke) {
    if (pokeOne) {
      setPokeTwo(poke)
    } else {
      setPokeOne(poke)
    }
  }


  return <PokemonContext.Provider value={{pokeOne, pokeTwo, setPokeOne, setPokeTwo, handlePokeSelect}}>{children}</PokemonContext.Provider>
}

export {PokemonContext}
export {PokemonProvider}