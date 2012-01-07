## Simple Tooltips for d3.js
**ALPHA STATE**

Pure SVG tooltips for [d3.js](http://mbostock.github.com/d3/)

### Usage
``` javascript
// Setup
tip = d3.svg.tip().text(function(d) { return d; });

// Usage
vis.selectAll('rect')
  .data(data)
.enter().append('rect')
  .attr('width', function() { return x.rangeBand() })
  .attr('height', function(d) { return h - y(d) })
  .attr('y', function(d) { return y(d) })
  .attr('x', function(d, i) { return x(i) })
  .on('mouseover', tip)
```