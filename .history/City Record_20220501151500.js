function solve(input) {
  let data = input.map(row => row.split(" | ").filter(x => x != ""));
  console.log(data);

  data.forEach(row => {
    row[0] = town;
    row[1] = latitude;
  });
}
solve([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
