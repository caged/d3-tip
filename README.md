## d3.tip: Tooltips for d3-based visualizations

![](https://github-images.s3.amazonaws.com/skitch/Screen_Shot_2013-04-08_at_11.40.10_AM-20130408-114054.png)


### Usage
``` javascript

/* Initialize tooltip */
tip = d3.tip().text(function(d) { return d; });

/* Invoke the tip in the context of your visualization */
vis.call(tip)

vis.selectAll('rect')
  .data(data)
.enter().append('rect')
  .attr('width', function() { return x.rangeBand() })
  .attr('height', function(d) { return h - y(d) })
  .attr('y', function(d) { return y(d) })
  .attr('x', function(d, i) { return x(i) })
  /* Show and hide tip on mouse events */
  .on('mouseover', tip.show)
  .on('mouseout', tip.hide)
```
