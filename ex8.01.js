// only diff here is the bigger values & SVG height
// Note everything magically scales
var dataset = [
                  [ 5,     20 ],
                  [ 480,   90 ],
                  [ 250,   50 ],
                  [ 100,   33 ],
                  [ 330,   95 ],
                  [ 410,   12 ],
                  [ 475,   44 ],
                  [ 25,    67 ],
                  [ 85,    21 ],
                  [ 220,   88 ],
                  [ 600, 150]
              ];
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
var svg = d3.select("#e8_01")
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

// labels
svg.selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text(function(d) {
    return d[0] + " , " + d[1];
  })
  .attr({x: function(d) { return xScale(d[0]); },
         y: function(d) { return yScale(d[1]); },
         class: "scatterplot_label"
        });

// define the axes
var xAxis = d3.svg.axis()
  .scale(xScale)
  .orient("bottom"); // below the line

// add the axes
svg.append("g") // group SVG element
  .call(xAxis);
