function solve(input) {
  let data = input.map(row =>
    row
      .split("")
      .filter(x => x != "")
      .map(x => x.trim())
  );
  console.log(data);
}
solve([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
