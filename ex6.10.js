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
                  [ 220,   88 ]
              ];
var w = 500;
var h = 100;

var svg = d3.select("#e6_10")
            .append("svg")
            .attr({width: w,
                   height: h});

svg.selectAll("circle")
   .data(dataset)
   .enter()
   .append("circle")
   .attr({cx: function(d) { return d[0] },
          cy: function(d) { return d[1] },
          r: 5});
