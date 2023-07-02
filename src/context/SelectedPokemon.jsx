import { createContext, useState } from "react";

const PokemonContext = createContext()

function PokemonProvider({children}) {
  const [pokeOne, setPokeOne] = useState(null)
  const [pokeTwo, setPokeTwo] = useState(null)


  return <PokemonContext.Provider value={{pokeOne, pokeTwo, setPokeOne, setPokeTwo}}>{children}</PokemonContext.Provider>
}

export {PokemonContext}
export {PokemonProvider}