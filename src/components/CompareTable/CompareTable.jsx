import "./compare-table.css"

function CompareTable({pokeOne, pokeTwo}) {
  console.log(pokeOne)

  return (
    <div className="table-wrapper">
      {/* Table Header */}
      <div className="row header-row">
        <div className="poke-one-name">
          {pokeOne
            ? pokeOne.name[0].toUpperCase() + pokeOne.name.substring(1)
            : "N/A"}
        </div>
        <div className="stat-header">Stat</div>
        <div className="poke-two-name">
          {pokeTwo
            ? pokeTwo.name[0].toUpperCase() + pokeTwo.name.substring(1)
            : "N/A"}
        </div>
      </div>
      {/* HP */}
      <div className="row">
        <div className="stat poke-one-stat">
          <div
            key={pokeOne}
            style={{ width: `${pokeOne?.stats[0].base_stat / 1.3}px` }}
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
            style={{ width: `${pokeTwo?.stats[0].base_stat / 1.3}px` }}
            className="poke-two-bar"
          ></div>
        </div>
      </div>
      {/* ATK */}
      <div className="row">
        <div className="stat poke-one-stat">
          <div
            key={pokeOne}
            style={{ width: `${pokeOne?.stats[1].base_stat / 1.3}px` }}
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
            style={{ width: `${pokeTwo?.stats[1].base_stat / 1.3}px` }}
            className="poke-two-bar"
          ></div>
        </div>
      </div>
      {/* DEF */}
      <div className="row">
        <div className="stat poke-one-stat">
          <div
            key={pokeOne}
            style={{ width: `${pokeOne?.stats[2].base_stat / 1.3}px` }}
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
            style={{ width: `${pokeTwo?.stats[2].base_stat / 1.3}px` }}
            className="poke-two-bar"
          ></div>
        </div>
      </div>
      {/* SP. ATK */}
      <div className="row">
        <div className="stat poke-one-stat">
          <div
            key={pokeOne}
            style={{ width: `${pokeOne?.stats[3].base_stat / 1.3}px` }}
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
            style={{ width: `${pokeTwo?.stats[3].base_stat / 1.3}px` }}
            className="poke-two-bar"
          ></div>
        </div>
      </div>
      {/* SP. DEF */}
      <div className="row">
        <div className="stat poke-one-stat">
          <div
            key={pokeOne}
            style={{ width: `${pokeOne?.stats[4].base_stat / 1.3}px` }}
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
            style={{ width: `${pokeTwo?.stats[4].base_stat / 1.3}px` }}
            className="poke-two-bar"
          ></div>
        </div>
      </div>
      {/* SPEED */}
      <div className="row">
        <div className="stat poke-one-stat">
          <div
            key={pokeOne}
            style={{ width: `${pokeOne?.stats[5].base_stat / 1.3}px` }}
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
            style={{ width: `${pokeTwo?.stats[5].base_stat / 1.3}px` }}
            className="poke-two-bar"
          ></div>
        </div>
      </div>
    </div>
  )
}

export default CompareTable