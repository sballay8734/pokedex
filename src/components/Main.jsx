import "./style.css"
import Card from "./Card/Card"
import axios from "axios"
import PokeInfo from "./PokeInfo/PokeInfo"
import { BsFillArrowLeftSquareFill } from "react-icons/bs"
import { BsFillArrowRightSquareFill } from "react-icons/bs"
import { useState, useEffect } from "react"

function Main() {
  const [pokeData, setPokeData] = useState([])
  const [loading, setLoading] = useState(true)
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
  const [nextUrl, setNextUrl] = useState()
  const [prevUrl, setPrevUrl] = useState()

  async function fetchData() {
    setLoading(true)
    const response = await axios.get(url)
    // console.log(response.data.results)
    setNextUrl(response.data.next)
    setPrevUrl(response.data.previous)
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

  function nextPage() {
    if (!nextUrl) return
    setPokeData([])
    setUrl(nextUrl)
  }

  function prevPage() {
    if (!prevUrl) return
    setPokeData([])
    setUrl(prevUrl)
  }

  useEffect(() => {
    fetchData()
  }, [url])

  return <>
    <div className="container">
      <div className="main-top">
        <div className="pokemon-wrapper">
          <Card pokemon={pokeData} loading={loading} />
        </div>
        <div className="btn-nav-group">
          <button onClick={prevPage}><BsFillArrowLeftSquareFill/></button>
          <button onClick={nextPage}><BsFillArrowRightSquareFill/></button>
        </div>
      </div>
      <div className="main-bottom">
        <PokeInfo />
      </div>
    </div>
  </>
}

export default Main