var dataset = [5, 10, 15, 20, 25];
d3.select("#e5_3")
  .selectAll("p")
  .data(dataset)
  .enter()
  .append("p")
  .text(function(d) { return d; });
