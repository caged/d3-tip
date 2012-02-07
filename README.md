## Simple SVG Tooltips for d3.js - ALPHA QUALITY

Pure SVG tooltips for [d3.js](http://mbostock.github.com/d3/). ~3kb compressed, ~7k original.

![](http://dl.dropbox.com/u/602885/d3-tip-1.png)

* Familiar API - Modeled after the d3 API.
* SVG - It's all svg, no hacks
* Text only - Currently supports simple text values in tooltips
* Styleable - Use any svg styling support (dashed borders, etc).

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

## TODO
* ~~Left orientation~~
* ~~Right orientation~~
* ~~Reorient when tip exceeds document bounds~~
* ~~docs~~
* Auto orientation
* svg content in tip
* type - specify if tooltip is sticky.
