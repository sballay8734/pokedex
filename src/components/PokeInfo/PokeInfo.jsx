import "./poke-info.css"

function PokeInfo() {
  return <>
    <h1>Pokemon Name</h1>
    <img src="" alt="Pokemon Img" />
    <div className="abilities">
      <div className="ability-one">
        <h2>Ability One</h2>
      </div>
      <div className="ability-two">
        <h2>Ability Two</h2>
      </div>
    </div>
    <div className="stats">
      <h3>HP</h3>
      <h3>Attack</h3>
      <h3>Defense</h3>
      <h3>Special-Attack</h3>
      <h3>Speed</h3>
    </div>
  </>
}

export default PokeInfo
