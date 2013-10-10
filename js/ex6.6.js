var dataset = [5, 10, 15, 20, 25];

var w = 500;
var h = 50;


// Set up the SVG element which will contain everything
var svg = d3.select("#e6_6")
            .append("svg")
            .attr("height", h)
            .attr("width", w);

// Get a reference to the circles which we're creating inside the SVG element
var circles = svg.selectAll("circle")
                 .data(dataset)
                 .enter()
                 .append("circle");

// Set the attributes of the circles
circles.attr("cx", function(d, i) {
          return (i * 50) + 25;
        })
        .attr("cy", h/2)
        .attr("r", function(d) {
          return d;
        });
