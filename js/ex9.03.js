var w = 600;
var h = 250;
var padding = 30;

// Dynamic, random dataset
var numDataPoints = 50;
var maxRange = Math.random() * 1000;

var dataset = [];
for (var i = 0; i < numDataPoints; i++) {
  dataset.push([Math.floor(Math.random() * maxRange),
                Math.floor(Math.random() * maxRange)]);
}

// Scales
var xScale = d3.scale.linear()
                     .domain([0, d3.max(dataset, function(d) { return d[0]; })])
                     .range([padding, w - padding * 2]);
var yScale = d3.scale.linear()
                     .domain([0, d3.max(dataset, function(d) { return d[1]; })])
                     .range([h - padding, padding]);

// Axes
var xAxis = d3.svg.axis()
                  .scale(xScale)
                  .orient("bottom")
                  .ticks(5);
var yAxis = d3.svg.axis()
                  .scale(yScale)
                  .orient("left")
                  .ticks(5);

// Down to business
var svg = d3.select("#e9_03")
            .append("svg")
            .attr({width: w, height: h});

svg.selectAll("circle")
   .data(dataset)
   .enter()
   .append("circle")
   .attr({cx: function(d) { return xScale(d[0]); },
          cy: function(d) { return yScale(d[1]); },
          r: 2});

// Axes
svg.append("g")
   .attr({class: "axis",
          transform: "translate(0,"+(h-padding)+")"})
   .call(xAxis);

svg.append("g")
   .attr({class: "axis",
          transform: "translate(0," + padding + ")"})
   .call(yAxis);

// The Updatotron
d3.select("#e9_03_updater")
  .on("click", function() {
    // Redefine all these values
    // So they don't get overwritten by later scripts
    // namespaces anyone?
    var w = 600;
    var h = 250;
    var padding = 30;
    var xScale = d3.scale.linear()
      .domain([0, d3.max(dataset, function(d) { return d[0]; })])
      .range([padding, w - padding * 2]);
    var yScale = d3.scale.linear()
      .domain([0, d3.max(dataset, function(d) { return d[1]; })])
      .range([h - padding, padding]);


    var svg = d3.select("#e9_03").select("svg");
    var numValues = numDataPoints;
    dataset = [];
    for (var i = 0; i < numValues; i++) {
      dataset.push([Math.floor(Math.random() * maxRange), 
                    Math.floor(Math.random() * maxRange)]);
    }

    // Reseed the scales to the new values
    xScale.domain([0, d3.max(dataset, function(d) { return d[0]; })]);
    yScale.domain([0, d3.max(dataset, function(d) { return d[1]; })]);

    // Actually update the picchar
    svg.selectAll("circle")
      .data(dataset)
      .transition()
      .each("start", function() {
        d3.select(this).attr({fill: "magenta", r: 3});
      })
      .duration(1000)
      .attr({cx: function(d) { return xScale(d[0]); },
             cy: function(d) { return yScale(d[1]); }})
      .each("end", function() {
        d3.select(this).transition().duration(1000).attr({fill: "black", r: 2});
      });
  });
