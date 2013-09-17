var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
                11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

var w = 500;
var h = 100;
var barPadding = 1;

var svg = d3.select("#e6_8")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

// just jump right in and add the bars to the svg
// refactor to include coloured bars
// refactor to use "multivalue maps"

var barAttrs = {
  x: function (d, i) { return i * (w / dataset.length); },
  y: function(d) { return h - d * 4; },
  width: w / dataset.length - barPadding,
  height: function (d) { return d * 4; },
  fill: function (d) { return "rgb(0, 0, " + (d * 10) + ")";}
}

svg.selectAll("rect")
   .data(dataset)
   .enter()
   .append("rect")
   .attr(barAttrs);
