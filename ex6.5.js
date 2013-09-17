var dataset = []; //Initialize empty array
for (var i = 0; i < 25; i++) { //Loop 25 times
  var newNumber = Math.floor(Math.random() * 30); //New random number (0-30)
  dataset.push(newNumber); //Add new number to array
}

d3.select("#e6_5")
  .selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class", "bar")
  .style("height", function (d) {
    var barHeight = d * 5;
    return barHeight + "px";
  });
