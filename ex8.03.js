// random data.
// Note everything magically scales
var dataset = [];
var numDataPoints = 50;
var xRange = Math.random() * 1000;
var yRange = Math.random() * 1000;
for (var i = 0; i < numDataPoints; i++) {
    var newNumber1 = Math.floor(Math.random() * xRange);
    var newNumber2 = Math.floor(Math.random() * yRange);
    dataset.push([newNumber1, newNumber2]);
}

var w = 500;
var h = 300;
var padding = 50;

// Scales: what this lesson is about
// I'm 100% certain these could be curried
var xScale = d3.scale.linear()
  .domain([0, d3.max(dataset, function(d) { return d[0]; })])
  .range([padding, w - padding]);

var yScale = d3.scale.linear()
  .domain([0, d3.max(dataset, function(d) { return d[1]; })])
  .range([h - padding, padding]);

var rScale = d3.scale.linear()
  .domain([0, d3.max(dataset, function(d) {return d[1];})])
  .range([2, 5]);

// Find the svg we're targeting
var svg = d3.select("#e8_03")
            .append("svg")
            .attr({width: w,
                   height: h});

// circles
svg.selectAll("circle")
   .data(dataset)
   .enter()
   .append("circle")
   // use dem scales
   .attr({cx: function(d) { return xScale(d[0]); },
          cy: function(d) { return yScale(d[1]); },
          r: function(d) { return rScale(d[1]); }
         });


// define the axes
var xAxis = d3.svg.axis()
  .scale(xScale)
  .orient("bottom") // below the line
  .ticks(5); // "5" ticks

var yAxis = d3.svg.axis()
  .scale(yScale)
  .orient("left")
  .ticks(5); // "5" ticks

// add the axes
svg.append("g") // group SVG element
  .attr("class", "axis") // used in style.css for styling
  .attr("transform", "translate(0," + (h - padding) + ")") // move to bottom
  .call(xAxis);

svg.append("g")
  .attr("class", "axis")
  .attr("transform", "translate(" + padding + ", 0)")
  .call(yAxis);
