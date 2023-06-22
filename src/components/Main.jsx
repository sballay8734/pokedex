import "./style.css"
import { useEffect, useState } from "react"
import Card from "./Card/Card"
import PokeInfo from "./PokeInfo/PokeInfo"
import { BsFillArrowLeftSquareFill } from "react-icons/bs"
import { BsFillArrowRightSquareFill } from "react-icons/bs"

function Main() {
  const [pokeData, setPokeData] = useState([])
  const [loading, setLoading] = useState(true)
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
  const [nextUrl, setNextUrl] = useState()
  const [prevUrl, setPrevUrl] = useState()

  async function fetchData() {
    setLoading(true)
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await response.json()

    setNextUrl(data.next)
    setPrevUrl(data.previous)
    getPokemon(data.results)
    setLoading(false)
  }

  async function getPokemon(data) {
    data.map(async(item) => {
      const response = await fetch(item.url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = await response.json()
      setPokeData(current => {
        current=[...current, data]
        return current
      })
    })
  } 

  useEffect(() => {
    fetchData()
  }, [url])

  return <>
    <div className="container">
      <div className="main-top">
        <div className="card-wrapper">
          <Card pokemon={pokeData} loading={loading} />
        </div>
        <div className="btn-nav-group">
          <button><BsFillArrowLeftSquareFill/></button>
          <button><BsFillArrowRightSquareFill/></button>
        </div>
      </div>
      <div className="main-bottom">
        <PokeInfo />
      </div>
    </div>
  </>
}

export default Main