import "./compare-table.css"

function CompareTable({pokeOne, pokeTwo}) {
  console.log(pokeOne)
  return <table className="compare-table">
    <thead>
      <tr>
        <th>{pokeOne ? pokeOne.name : "null"}</th>
        <th>Stat</th>
        <th>{pokeTwo ? pokeTwo.name : "null"}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{pokeOne ? pokeOne.stats[0].base_stat : "null"}</td>
        <td>HP</td>
        <td>{pokeTwo ? pokeTwo.stats[0].base_stat : "null"}</td>
      </tr>
    </tbody>
  </table>
}

export default CompareTable