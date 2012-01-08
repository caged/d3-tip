d3.svg.tip = function() {
  var orient = 'top',
      padding = 5,
      stemSize = 60,
      offset = d3_svg_offset,
      text = d3_svg_text,
      node = make('g');

  function tip(d, i) {
    this.ownerSVGElement.appendChild(node);

    var tipOffset = offset.apply(this, arguments),
        tipText   = text.apply(this, arguments),
        container = d3.select(node),
        x, y;
    
    // Elements and Bounds
    var doc        = d3.select(this.ownerSVGElement),
        target     = d3.select(this),
        backing    = d3.select(make('rect')),
        docRect    = this.ownerSVGElement.getBoundingClientRect(),
        targetRect = this.getBBox();

    // FIXME: d3 has problems using `append` with nodes that were created
    // but not immediately added to the SVG dom.
    // Clear the container and add the rect backing
    container.text(' ').node().appendChild(backing.node())

    // The value to show in the tooltip
    var val     = container.append('text').text(tipText).attr('text-anchor', 'middle').attr('alignment-baseline', 'middle'),
        valRect = val.node().getBoundingClientRect();
    
    backing.attr('width', valRect.width).attr('height', valRect.height)
    val.attr('dx', valRect.width / 2).attr('dy', valRect.height / 2)

    var containerRect = container.node().getBBox();

    switch(orient) {
      case 'top':
        x = targetRect.x + (targetRect.width / 2) - (containerRect.width / 2);
        y = targetRect.y;
      break;
    }

    container.attr('transform', 'translate(' + x + ',' + y + ')')
    //ele.on('mouseout', function() { container.remove() })
    // var pad     = padding.apply(this, arguments),
    //     oset    = offset.apply(this, arguments),
    //     cnt     = text.apply(this, arguments),
    //     klass   = className.apply(this, arguments),
    //     el      = d3.select(this),
    //     doc     = d3.select(this.ownerSVGElement),
    //     group   = doc.select('#' + id).empty() ? doc.append('g').attr('id', id) : doc.select('#' + id),
    //     bounds  = doc.node().getBoundingClientRect(),
    //     symbol  = d3.svg.symbol().type('triangle-down').size(stemSize),
    //     rect    = group.append('rect').attr('transform', 'translate(0,0)').attr('rx', 3).attr('ry', 3),
    //     stem    = group.append('path').attr('d', symbol),
    //     ebbox   = el.node().getBoundingClientRect(),
    //     stemBounds = stem.node().getBBox();
    
    // //var rect = group.append('rect').attr('transform', 'translate(0,0)').attr('rx', 3).attr('ry', 3);
    // //el.on('mouseout', function() { group.remove() })

    // group.classed(klass, true) //.text(' ');

    // if(typeof cnt === 'string' || typeof cnt === 'number') {
    //   var str = group.append('text')
    //       .text(cnt)
    //       .attr('text-anchor', 'middle')
    //       .attr('alignment-baseline', 'middle'),
    //       sbbox = str.node().getBoundingClientRect(),
    //       rectw = sbbox.width + padding(d, i) * 2,
    //       recth = sbbox.height + padding(d, i) * 2;

    //   rect.attr('width', rectw).attr('height', recth)
    //   var rbbox = rect.node().getBBox(),
    //       x = (ebbox.right - (ebbox.width / 2) - (rbbox.width / 2) - (stemBounds.width / 2)) + oset[0],
    //       y = (ebbox.top - rbbox.height) - stemBounds.height + oset[1];
      
    //   if(x <= 0) { x = 0 }
    //   if(x + rbbox.width > bounds.width) { x = bounds.width - rbbox.width }
    //   if(y <= 0) { y = 0 }

    //   str.attr('dx', rbbox.width / 2).attr('dy', rbbox.height / 2)
    //   group.attr('transform', "translate(" + x + "," + y + ")")
    //   stem.attr('transform','translate(' + rbbox.width / 2 + ',' + (rbbox.height + stemBounds.height / 2) + ')')
    // }
        
  }

  function d3_svg_offset() {
    return [0, 0];
  }

  function d3_svg_text() {
    return ' ';
  }

  tip.attr = function(n, v) {
    d3.select(node).attr(n, v)
    return tip;
  }

  tip.orient = function(v) {
    if (!arguments.length) return orient;
    orient = v;
    return tip;
  };

  tip.padding = function(v) {
    if (!arguments.length) return padding;
    padding = v;
    return tip;
  };

  tip.stemSize = function(v) {
    if (!arguments.length) return stemSize;
    stemSize = v;
    return tip;
  };

  tip.offset = function(v) {
    if (!arguments.length) return offset;
    offset = v == null ? v: d3.functor(v);
    return tip;
  };  

  tip.text = function(v) {
    if (!arguments.length) return text;
    text = v == null ? v: d3.functor(v);

    return tip;
  };

  function make(e) {
    return document.createElementNS(d3.ns.prefix.svg, e);
  }

  return tip;
}