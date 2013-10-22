//Width and height
var w = 600;
var h = 250;

var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
		11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

var xScale = d3.scale.ordinal()
  .domain(d3.range(dataset.length))
  .rangeRoundBands([0, w], 0.05);

var yScale = d3.scale.linear()
  .domain([0, d3.max(dataset)])
  .range([0, h]);

//Create SVG element
var svg = d3.select("#e9_02")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

//Bar attributes
var barAttributes = {
  x: function(d, i) {return xScale(i);},
  y: function(d) {return h - yScale(d);},
  width: xScale.rangeBand(),
  height: function(d) {return yScale(d);},
  fill: function(d) {return "rgb(0, 0, " + (d * 10) + ")";}
};

//Create bars
svg.selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr(barAttributes);

//Label attributes
var labelAttrs = {
  x: function(d, i) {return xScale(i) + xScale.rangeBand() / 2;},
  y: function(d) {return h - yScale(d) + 14;},
  class: "barChartLabel" // for adding SVG style rules
};

//Create labels
svg.selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text(function(d) {
    return d;
  })
  .attr(labelAttrs);

// Interactivity, allegedly

d3.select("#e9_02_changeVals")
  .on("click", function() {
    dataset = [ 11, 12, 15, 20, 18, 17, 16, 18, 23, 25,
                    5, 10, 13, 19, 21, 25, 22, 18, 15, 13 ];

    // redefining all of these inside the callback
    // otherwise they get overwritten by vars with same names
    // from scripts loaded after this one
    // there must be a better way of handling this
    var svg = d3.select("#e9_02").select("svg");
    var h = 250;
    var w = 600;
    var yScale = d3.scale.linear()
      .domain([0, d3.max(dataset)])
      .range([0, h]);
    var xScale = d3.scale.ordinal()
      .domain(d3.range(dataset.length))
      .rangeRoundBands([0, w], 0.05);


    console.log("CLIXXORED");
    console.log("I think barAttributes is: ");
    console.log(barAttributes);
    svg.selectAll("rect")
      .data(dataset)
      .attr({y: function(d) { return h - yScale(d); },
             height: function(d) { return yScale(d); },
             fill: function(d) { return "rgb(0, 0, " + (d * 10) + ")"; }
             });
    svg.selectAll("text")
      .data(dataset)
      .text(function(d) { return d; })
      .attr({
        x: function(d, i) { return xScale(i) + xScale.rangeBand() / 2; },
        y: function(d) { return h - yScale(d) + 14; }
        });
  });
