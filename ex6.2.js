var dataset = [5, 10, 15, 20, 25];

d3.select("#e6_2")
  .selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class", "bar")
  .style("height", function (d) {
    return d + "px";
  });
