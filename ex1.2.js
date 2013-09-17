var dataset = [5, 10, 15, 20, 25];
d3.select("body")
  .select("#ex1_2")
  .selectAll("p")
  .data(dataset)
  .enter()
  .append("p")
  .text("Check me out!");
