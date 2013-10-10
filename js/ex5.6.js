var dataset = [5, 10, 15, 20, 25];
d3.select("#e5_6")
  .selectAll("p")
  .data(dataset)
  .enter()
  .append("p")
  .text(function(d) { return "I can count up to " + d; })
  .style("color", function (d) {
    if (d <= 15) {
      return "red";
    } else {
      return "black";
    }
  });
