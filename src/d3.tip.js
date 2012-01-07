d3.svg.tip = function() {
  var orient = 'top',
      id = 'd3-tip',
      className = 'd3-tip',
      pad = 5,
      stemSize = 60;

  function tip(d, i) {
    var el = d3.select(this),
        doc = d3.select(this.ownerSVGElement),
        group = doc.select('#' + id).empty() ? doc.append('g').attr('id', id) : doc.select('#' + id),
        bounds = doc.node().getBoundingClientRect(),
        symbol = d3.svg.symbol().type('triangle-down').size(stemSize);
    
    //el.on('mouseout', function() { group.remove() })

    group.classed(className, true).text(' ');

    var rect = group.append('rect').attr('transform', 'translate(0,0)').attr('rx', 3).attr('ry', 3),
        stem = group.append('path').attr('d', symbol),
        cnt = content(d, i, group),
        ebbox = el.node().getBBox(),
        stemBounds = stem.node().getBBox();

    if(typeof cnt === 'string' || typeof cnt === 'number') {
      var str = group.append('text')
          .text(cnt)
          .attr('text-anchor', 'middle')
          .attr('alignment-baseline', 'middle'),
          sbbox = str.node().getBBox();
      

      rect.attr('width', sbbox.width + pad * 2)
        .attr('height', sbbox.height + pad * 2)

      var rbbox = rect.node().getBBox(),
          x = (ebbox.x - sbbox.width / 2),
          y = (ebbox.y - rbbox.height) - stemBounds.height;
      
      if(x <= 0) { x = 0 }
      if(x + rbbox.width > bounds.width) { x = bounds.width - rbbox.width }
      if(y <= 0) { y = 0 }

      str.attr('dx', rbbox.width / 2).attr('dy', rbbox.height / 2)
      group.attr('transform', "translate(" + x + "," + y + ")")
      stem.attr('transform','translate(' + rbbox.width / 2 + ',' + (rbbox.height + stemBounds.height) + ')')
    }    
  }

  
  tip.orient = function(v) {
    if (!arguments.length) return orient;
    orient = v == null ? v: d3.functor(v);
    return tip;
  };

  tip.id = function(v) {
    if (!arguments.length) return id;
    id = v == null ? v: d3.functor(v);
    return tip;
  };

  tip.className = function(v) {
    if (!arguments.length) return className;
    className = v == null ? v: d3.functor(v);
    return tip;
  };

  tip.content = function(v) {
    if (!arguments.length) return content;
    content = v == null ? v: d3.functor(v);

    return tip;
  };

  return tip;
}