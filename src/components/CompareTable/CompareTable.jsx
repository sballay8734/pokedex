import { useState } from "react"
import "./compare-table.css"
import {AiOutlineCloseCircle} from "react-icons/ai"

function CompareTable({pokeOne, pokeTwo, setPokeOne, setPokeTwo}) {
  const [screenSize, setScreenSize] = useState(window.innerWidth)

  function setBarSize(stat) {
    if (screenSize >= 300 && screenSize < 350) {
      return stat / 4
    } else if (screenSize > 350 && screenSize <= 400) {
      return stat / 3
    } else if (screenSize > 400 && screenSize <= 450) {
      return stat / 2.2
    } else if (screenSize > 450 && screenSize <= 500) {
      return stat / 1.8
    } else if (screenSize > 500 && screenSize <= 550) {
      return stat / 1.6
    } else if (screenSize > 550 && screenSize <= 600) {
      return stat / 1.4
    } else if (screenSize > 600 && screenSize <= 615) {
      return stat / 1.2
    } else if (screenSize > 615 && screenSize <= 850) {
      return stat / 2.2
    } else if (screenSize > 850 && screenSize <= 900) {
      return stat / 2
    } else if (screenSize > 900 && screenSize <= 950) {
      return stat / 1.7
    } else if (screenSize > 950 && screenSize <= 1000) {
      return stat / 1.6
    } else if (screenSize > 1000 && screenSize <= 1050) {
      return stat / 1.5
    } else if (screenSize > 1050 && screenSize <= 1100) {
      return stat / 1.4
    } else if (screenSize > 1100 && screenSize <= 1200) {
      return stat / 1.3
    } else if (screenSize > 1200 && screenSize <= 1300) {
      return stat / 1.2
    } else if (screenSize > 1300 && screenSize <= 1400) {
      return stat / 1.1
    } else if (screenSize > 1400 && screenSize <= 1500) {
      return stat
    } else return stat / 4.5
  }

  return (
    <div className="table-wrapper">
      {/* Table Header */}
      <div className="row header-row">
        <div
          className={`poke-one-name ${pokeOne ? pokeOne.name.length > 9 ? "large" : "" : ""} ${
            pokeOne ? pokeOne.name.length > 12 ? "xl" : "" : ""
          }`}
        >
          <div
            onClick={() => setPokeOne(null)}
            className="small-screen-remove-one"
          >
            <AiOutlineCloseCircle />
          </div>
          {pokeOne
            ? pokeOne.name[0].toUpperCase() + pokeOne.name.substring(1)
            : "N/A"}
        </div>
        <div className="stat-header">Stat</div>
        <div
          className={`poke-two-name ${pokeTwo ? pokeTwo.name.length > 9 ? "large" : "" : ""} ${
            pokeTwo ? pokeTwo.name.length > 12 ? "xl" : "" : ""
          }`}
        >
          {pokeTwo
            ? pokeTwo.name[0].toUpperCase() + pokeTwo.name.substring(1)
            : "N/A"}
          <div
            onClick={() => setPokeTwo(null)}
            className="small-screen-remove-two"
          >
            <AiOutlineCloseCircle />
          </div>
        </div>
      </div>
      {/* HP */}
      <div className="row">
        <div className="stat poke-one-stat">
          <div
            key={pokeOne}
            style={{
              width: `${setBarSize(pokeOne?.stats[0].base_stat)}px`
            }}
            className="poke-one-bar"
          ></div>
        </div>
        <div className="stat-name-and-values">
          <div className="poke-one-stat-value">
            {pokeOne ? pokeOne?.stats[0].base_stat : "0"}
          </div>
          <div className="stat-name">HP</div>
          <div className="poke-two-stat-value">
            {pokeTwo ? pokeTwo?.stats[0].base_stat : "0"}
          </div>
        </div>
        <div className="stat poke-two-stat">
          <div
            key={pokeTwo}
            style={{
              width: `${setBarSize(pokeTwo?.stats[0].base_stat)}px`
            }}
            className="poke-two-bar"
          ></div>
        </div>
      </div>
      {/* ATK */}
      <div className="row">
        <div className="stat poke-one-stat">
          <div
            key={pokeOne}
            style={{
              width: `${setBarSize(pokeOne?.stats[1].base_stat)}px`
            }}
            className="poke-one-bar"
          ></div>
        </div>
        <div className="stat-name-and-values">
          <div className="poke-one-stat-value">
            {pokeOne ? pokeOne?.stats[1].base_stat : "0"}
          </div>
          <div className="stat-name">ATK</div>
          <div className="poke-two-stat-value">
            {pokeTwo ? pokeTwo?.stats[1].base_stat : "0"}
          </div>
        </div>
        <div className="stat poke-two-stat">
          <div
            key={pokeTwo}
            style={{
              width: `${setBarSize(pokeTwo?.stats[1].base_stat)}px`
            }}
            className="poke-two-bar"
          ></div>
        </div>
      </div>
      {/* DEF */}
      <div className="row">
        <div className="stat poke-one-stat">
          <div
            key={pokeOne}
            style={{
              width: `${setBarSize(pokeOne?.stats[2].base_stat)}px`
            }}
            className="poke-one-bar"
          ></div>
        </div>
        <div className="stat-name-and-values">
          <div className="poke-one-stat-value">
            {pokeOne ? pokeOne?.stats[2].base_stat : "0"}
          </div>
          <div className="stat-name">DEF</div>
          <div className="poke-two-stat-value">
            {pokeTwo ? pokeTwo?.stats[2].base_stat : "0"}
          </div>
        </div>
        <div className="stat poke-two-stat">
          <div
            key={pokeTwo}
            style={{
              width: `${setBarSize(pokeTwo?.stats[2].base_stat)}px`
            }}
            className="poke-two-bar"
          ></div>
        </div>
      </div>
      {/* SP. ATK */}
      <div className="row">
        <div className="stat poke-one-stat">
          <div
            key={pokeOne}
            style={{
              width: `${setBarSize(pokeOne?.stats[3].base_stat)}px`
            }}
            className="poke-one-bar"
          ></div>
        </div>
        <div className="stat-name-and-values">
          <div className="poke-one-stat-value">
            {pokeOne ? pokeOne?.stats[3].base_stat : "0"}
          </div>
          <div className="stat-name special">SP.ATK</div>
          <div className="poke-two-stat-value">
            {pokeTwo ? pokeTwo?.stats[3].base_stat : "0"}
          </div>
        </div>
        <div className="stat poke-two-stat">
          <div
            key={pokeTwo}
            style={{
              width: `${setBarSize(pokeTwo?.stats[3].base_stat)}px`
            }}
            className="poke-two-bar"
          ></div>
        </div>
      </div>
      {/* SP. DEF */}
      <div className="row">
        <div className="stat poke-one-stat">
          <div
            key={pokeOne}
            style={{
              width: `${setBarSize(pokeOne?.stats[4].base_stat)}px`
            }}
            className="poke-one-bar"
          ></div>
        </div>
        <div className="stat-name-and-values">
          <div className="poke-one-stat-value">
            {pokeOne ? pokeOne?.stats[4].base_stat : "0"}
          </div>
          <div className="stat-name special">SP.DEF</div>
          <div className="poke-two-stat-value">
            {pokeTwo ? pokeTwo?.stats[4].base_stat : "0"}
          </div>
        </div>
        <div className="stat poke-two-stat">
          <div
            key={pokeTwo}
            style={{
              width: `${setBarSize(pokeTwo?.stats[4].base_stat)}px`
            }}
            className="poke-two-bar"
          ></div>
        </div>
      </div>
      {/* SPEED */}
      <div className="row">
        <div className="stat poke-one-stat">
          <div
            key={pokeOne}
            style={{
              width: `${setBarSize(pokeOne?.stats[5].base_stat)}px`
            }}
            className="poke-one-bar"
          ></div>
        </div>
        <div className="stat-name-and-values">
          <div className="poke-one-stat-value">
            {pokeOne ? pokeOne?.stats[5].base_stat : "0"}
          </div>
          <div className="stat-name">SPD</div>
          <div className="poke-two-stat-value">
            {pokeTwo ? pokeTwo?.stats[5].base_stat : "0"}
          </div>
        </div>
        <div className="stat poke-two-stat">
          <div
            key={pokeTwo}
            style={{
              width: `${setBarSize(pokeTwo?.stats[5].base_stat)}px`
            }}
            className="poke-two-bar"
          ></div>
        </div>
      </div>
    </div>
  )
}

export default CompareTable