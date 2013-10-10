var dataset = [5, 10, 15, 20, 25];
d3.select("#e5_5")
  .selectAll("p")
  .data(dataset)
  .enter()
  .append("p")
  .text(function(d) { return "I can count up to " + d; })
  .style("color", "red");
