function FilteredPokemon({results}) {
  results.map((pokemon) => {
    return <div>{pokemon}</div>
  })
}

export default FilteredPokemon