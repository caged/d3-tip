[API Documentation](index.md) ➤ Initializing tooltips

# Initializing tooltips

### d3.tip
Create and return a [configurable function](http://bost.ocks.org/mike/chart) for
a tooltip.

You ***must*** call the tip on the context of the target visualization.

``` javascript
var tip = d3.tip()
  .attr('class', 'd3-tip')
  .html(function(d) { return d; })

var vis = d3.select(document.body)
  .append('svg')
  // REQUIRED:  Call the tooltip on the context of the visualization
  .call(tip)

 vis.append('rect')
  .attr('width', 100)
  .attr('height', 100)
  // Show and hide the tooltip
  .on('mouseover', tip.show)
  .on('mouseout', tip.hide)
```
