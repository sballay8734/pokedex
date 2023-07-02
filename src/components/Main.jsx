import "./style.css"
import Card from "./Card/Card"
import axios from "axios"
import PokeInfo from "./PokeInfo/PokeInfo"
import { useState, useEffect } from "react"
import apiRoutes from "../data/urlData"

function Main() {
  const [pokeData, setPokeData] = useState([])
  const [loading, setLoading] = useState(true)
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?limit=151")
  const [active, setActive] = useState("Gen 1")

  async function fetchData() {
    setLoading(true)
    const response = await axios.get(url)
    // console.log(response.data.results)
    getPokemon(response.data.results)
    setLoading(false)
    // console.log(pokeData)
  }

  async function getPokemon(results) {
    results.map(async (poke) => {
      const result = await axios.get(poke.url)
      // console.log(result.data)
      setPokeData(prev => {
        prev = [...prev, result.data]
        prev.sort((a,b) => a.id>b.id?1:-1)
        return prev
      })
    })
  }

  function handleGenSelect(route) {
    setUrl(route.route)
    setActive(route.title)
  }

  useEffect(() => {
    setPokeData([])
    fetchData()
  }, [url])

  return <>
    <div className="container">
      <div className="main-top">
        <div className="gen-button-wrapper">
          {
            apiRoutes.map((route) => {
              return <button onClick={() => handleGenSelect(route)} key={route.route} className={`gen-button ${active === route.title ? "active" : ""}`}>{route.title}</button>
            })
          }
        </div>
        <div className="pokemon-wrapper">
          <Card pokemon={pokeData} loading={loading} />
        </div>
      </div>
      <div className="main-bottom">
        <PokeInfo />
      </div>
    </div>
  </>
}

export default Main