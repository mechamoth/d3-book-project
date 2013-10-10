var dataset = [5, 10, 15, 20, 25];

d3.select("#e6_1")
  .selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class", "bar");
