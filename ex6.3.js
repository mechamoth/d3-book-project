var dataset = [5, 10, 15, 20, 25];

d3.select("#e6_3")
  .selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class", "bar")
  .style("height", function (d) {
    var barHeight = d * 5;
    return barHeight + "px";
  });
