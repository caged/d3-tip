# d3.tip: Tooltips for d3.js visualizations

![](https://github-images.s3.amazonaws.com/skitch/Screen_Shot_2013-04-08_at_11.40.10_AM-20130408-114054.png)

### API Docs
[API Documentation](docs/index.md)

### Download v0.5.0
* [Production Version](https://raw.github.com/Caged/d3-tip/v0.5.0/d3.tip.min.js) : **3kb** / **~1kb gzipped**
* [Development Version](https://raw.github.com/Caged/d3-tip/v0.5.0/src/d3.tip.js) : **6kb** / **~2kb gzipped**

### Install with Bower
```
bower install Caged/d3-tip
```
*Note the capital "C"*

### Quick Usage
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
