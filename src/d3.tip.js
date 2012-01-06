d3.svg.tip = function() {
  var orient = 'top',
      id = 'd3-tip',
      className = 'd3-tip',
      pad = 5;

  function tip(d, i) {
    var el = d3.select(this),
        doc = d3.select(this.ownerSVGElement),
        group = doc.select('#' + id).empty() ? doc.append('g').attr('id', id) : doc.select('#' + id);
    
    el.on('mouseout', function() { group.remove() })

    group.classed(className, true);
    group.text(' ')
    group.attr('transform', 'translate(50, 50)')

    var rect = group.append('rect').attr('transform', 'translate(0,0)').attr('rx', 2).attr('ry', 2),
        cnt = content(d, i, group),
        ebbox = el.node().getBBox(),
        cbbox = cnt.node().getBBox(),
        bounds = el.node().getBoundingClientRect();
    
    rect.attr('width', cbbox.width + pad * 2)
      .attr('height', cbbox.height + pad * 2)
    
    group.attr('transform', "translate(" + (bounds.left + bounds.width) + "," + (bounds.top - bounds.height) + ")")
    
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