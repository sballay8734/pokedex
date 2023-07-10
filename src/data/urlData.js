const apiRoutes = [
  { title: "All", route: "https://pokeapi.co/api/v2/pokemon/?limit=1010" },
  { title: "Gen 1 & 2", route: "https://pokeapi.co/api/v2/pokemon/?limit=251" },
  {
    title: "Gen 3 & 4",
    route: "https://pokeapi.co/api/v2/pokemon/?limit=242&offset=251"
  },
  {
    title: "Gen 5 & 6",
    route: "https://pokeapi.co/api/v2/pokemon/?limit=228&offset=493"
  },
  {
    title: "Gen 7 & 8",
    route: "https://pokeapi.co/api/v2/pokemon/?limit=184&offset=721"
  },
  {
    title: "Gen 9",
    route: "https://pokeapi.co/api/v2/pokemon/?limit=111&offset=899"
  }
]

export default apiRoutes
