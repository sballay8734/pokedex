import "./style.css"
import Card from "./Card/Card"
import axios from "axios"
import PokeInfo from "./PokeInfo/PokeInfo"
import { useState, useEffect } from "react"
import apiRoutes from "../data/urlData"
import sortMethods from "../data/sortMethods"

function Main() {
  const [pokeData, setPokeData] = useState([])
  const [loading, setLoading] = useState(true)
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?limit=251")
  const [active, setActive] = useState("Gen 1 & 2")
  const [sortMethod, setSortMethod] = useState("ID")

  async function fetchData() {
    setLoading(true)
    const response = await axios.get(url)
    getPokemon(response.data.results)
    setLoading(false)
  }

  function handleSort(result) {
    if (sortMethod === "ID") {
      setPokeData((prev) => {
        prev = [...prev, result.data]
        prev.sort((a, b) => (a.id > b.id ? 1 : -1))
        return prev
      })
    } else if (sortMethod === "A-Z") {
      setPokeData((prev) => {
        prev = [...prev, result.data]
        prev.sort((a, b) => (a.name > b.name ? 1 : -1))
        return prev
      })
    } else if (sortMethod === "Z-A") {
      setPokeData((prev) => {
        prev = [...prev, result.data]
        prev.sort((a, b) => (a.name < b.name ? 1 : -1))
        return prev
      })
    }
  }

  async function getPokemon(results) {
    results.map(async (poke) => {
      const result = await axios.get(poke.url)
      handleSort(result)
    })
  }

  function handleGenSelect(route) {
    setUrl(route.route)
    setActive(route.title)
  }

  useEffect(() => {
    setPokeData([])
    fetchData()
  }, [url, sortMethod])

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
        <div className="sort-dropdown-wrapper">
          <div>Sort By: </div>
          <div className="sort-methods">{sortMethods.map((method) => {
            return <div key={method} onClick={() => setSortMethod(method)} className={`sort-method ${sortMethod === method ? "active": ""}`}>{method}</div>
          })}</div>
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