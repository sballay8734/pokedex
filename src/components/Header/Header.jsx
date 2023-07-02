import "./header.css"

function Header() {
  return <div className="header">
    <h1 className="header-h1">Pokedex</h1>
    <h3 className="header-h3">Click on the pokemon to compare their stats</h3>
    <input className="poke-search" placeholder="Search functionality coming soon..."></input>
  </div>
}

export default Header