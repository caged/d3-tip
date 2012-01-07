d3.svg.tip = function() {
  var orient = 'top',
      id = 'd3-tip',
      className = d3_svg_className,
      padding = d3_svg_padding,
      stemSize = 60,
      offset = d3_svg_offset,
      text = d3_svg_text;

  function tip(d, i) {
    var pad = padding.apply(this, arguments),
        oset = offset.apply(this, arguments),
        cnt = text.apply(this, arguments),
        klass = className.apply(this, arguments),
        el = d3.select(this),
        doc = d3.select(this.ownerSVGElement),
        group = doc.select('#' + id).empty() ? doc.append('g').attr('id', id) : doc.select('#' + id),
        bounds = doc.node().getBoundingClientRect(),
        symbol = d3.svg.symbol().type('triangle-down').size(stemSize);
    
    //el.on('mouseout', function() { group.remove() })

    group.classed(klass, true).text(' ');

    var rect = group.append('rect').attr('transform', 'translate(0,0)').attr('rx', 3).attr('ry', 3),
        stem = group.append('path').attr('d', symbol),
        ebbox = el.node().getBoundingClientRect(),
        stemBounds = stem.node().getBBox();

    if(typeof cnt === 'string' || typeof cnt === 'number') {
      var str = group.append('text')
          .text(cnt)
          .attr('text-anchor', 'middle')
          .attr('alignment-baseline', 'middle'),
          sbbox = str.node().getBoundingClientRect(),
          rectw = sbbox.width + padding(d, i) * 2,
          recth = sbbox.height + padding(d, i) * 2;

      rect.attr('width', rectw).attr('height', recth)
      var rbbox = rect.node().getBBox(),
          x = (ebbox.right - (ebbox.width / 2) - (rbbox.width / 2) - (stemBounds.width / 2)) + oset[0],
          y = (ebbox.top - rbbox.height) - stemBounds.height + oset[1];
      
      if(x <= 0) { x = 0 }
      if(x + rbbox.width > bounds.width) { x = bounds.width - rbbox.width }
      if(y <= 0) { y = 0 }

      console.log(ebbox);
      doc.append('circle')
        .attr('class', 'debug')
        .attr('r', 2)
        .attr('cy', ebbox.top)
        .attr('cx', (ebbox.right - (ebbox.width / 2)))
        .style('fill', 'hotpink')

      str.attr('dx', rbbox.width / 2).attr('dy', rbbox.height / 2)
      group.attr('transform', "translate(" + x + "," + y + ")")
      stem.attr('transform','translate(' + rbbox.width / 2 + ',' + (rbbox.height + stemBounds.height / 2) + ')')
    }
        
  }

  function d3_svg_padding() {
    return 5;
  }

  function d3_svg_offset() {
    return [0, 0];
  }

  function d3_svg_text() {
    return ' ';
  }

  function d3_svg_className() {
    return 'd3-tip';
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

  tip.padding = function(v) {
    if (!arguments.length) return padding;
    padding = v == null ? v: d3.functor(v);
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

  return tip;
}