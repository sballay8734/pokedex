import "./compare-table.css"

function CompareTable({pokeOne, pokeTwo}) {
  console.log(pokeOne)
  const pokeOneStat = 156
  const pokeTwoStat = 110

  return (
    <div className="table-wrapper">
      {/* <div style={{width: `${testWidth}px`}} className="progress-bar"></div> */}
      <div className="row">
        <div className="stat poke-one-stat">
          <div className="poke-one-stat-value">{pokeOneStat}</div>
          <div
            style={{ width: `${pokeOneStat / 2.3}px` }}
            className="poke-one-bar"
          ></div>
        </div>
        <div className="stat-name">HP</div>
        <div className="stat poke-two-stat">
          <div
            style={{ width: `${pokeTwoStat / 2.3}px` }}
            className="poke-two-bar"
          ></div>
          <div className="poke-two-stat-value">{pokeTwoStat}</div>
        </div>
      </div>
    </div>
  )
}

export default CompareTable