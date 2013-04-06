// Public - contructs a new tooltip
//
// Returns a tip
d3.svg.tip = function() {
  var orient    = 'top',
      offset    = d3_svg_offset,
      text      = d3_svg_text,
      node      = init_node(),
      svg       = null,
      container = null,
      point     = null;

  function tip(svg) {
    container = svg
    svg = get_svg_node(svg)
    point = svg.createSVGPoint()
    document.body.appendChild(node)
  }

  function d3_svg_offset() {
    return [0, 0];
  }

  function d3_svg_text() {
    return ' ';
  }

  tip.show = function(v) {
    var bbox = get_screen_bbox(),
        content = text.apply(this, arguments)

    node.innerHTML = content
    node.style.display = 'block'
    node.style.left = (bbox.n.x - node.offsetWidth / 2) + 'px'
    node.style.top  = (bbox.n.y - node.offsetHeight) + 'px'
  }

  tip.hide = function(v) {
    node.style.display = 'none'
    node.innerText = ''
  }

  // Public: Proxy attr calls to the d3 tip container.  Sets or gets attribute value.
  //
  // n - name of the attribute
  // v - value of the attribute
  //
  // Returns tip or attribute value
  tip.attr = function(n, v) {
    if (arguments.length < 2) {
      return d3.select(node).attr(n)
    } else {
      d3.select(node).attr(n, v)
    }

    return tip;
  }

  // Public: Set or get the orientation of the tooltip
  //
  // v - One of top, bottom, left, or right
  //
  // Returns tip or oreint
  tip.orient = function(v) {
    if (!arguments.length) return orient;
    orient = v;
    return tip;
  };

  // Public: Sets or gets the offset of the tip
  //
  // v - Array of [x, y] offset
  //
  // Returns offset or
  tip.offset = function(v) {
    if (!arguments.length) return offset;
    offset = v == null ? v: d3.functor(v);
    return tip;
  };

  // Public: sets or gets the text value of the tooltip
  //
  // v - String value of the tip
  //
  // Returns text value or tip
  tip.text = function(v) {
    if (!arguments.length) return text;
    text = v == null ? v: d3.functor(v);

    return tip;
  };

  function init_node() {
    var node = document.createElement('div')
    node.style.position = 'absolute'
    node.style.display = 'none'
    node.style.boxSizing = 'border-box'
    return node
  }

  function get_svg_node(el) {
    el = el.node()
    if(el.tagName.toLowerCase() == 'svg') {
      return el
    } else {
      while(el.parentNode) {
        el = el.parentNode
        if(el.tagName.toLowerCase() == 'svg')
          return el
      }
    }

    return null
  }

  function get_screen_bbox() {
    var target = d3.event.target,
        bbox   = {}, x, y, width, height,
        matrix = target.getScreenCTM()

    width  = target.width  ? target.width.animVal.value  : target.r.animVal.value * 2
    height = target.height ? target.height.animVal.value : target.r.animVal.value * 2
    x      = target.x ? target.x.animVal.value : target.cx.animVal.value - (width / 2)
    y      = target.y ? target.y.animVal.value : target.cy.animVal.value - (height / 2)

    point.x = x + document.body.scrollLeft
    point.y = y + document.body.scrollTop
    bbox.nw = point.matrixTransform(matrix)
    point.x += width
    bbox.ne = point.matrixTransform(matrix)
    point.y += height
    bbox.se = point.matrixTransform(matrix)
    point.x -= width
    bbox.sw = point.matrixTransform(matrix)
    point.y -= height / 2
    bbox.w  = point.matrixTransform(matrix)
    point.x += width
    bbox.e = point.matrixTransform(matrix)
    point.x -= width / 2
    point.y -= height / 2
    bbox.n = point.matrixTransform(matrix)
    point.y += height
    bbox.s = point.matrixTransform(matrix)

    return bbox
  }

  function debug(bbox) {
    var points = [bbox.s, bbox.n, bbox.e, bbox.w, bbox.ne, bbox.nw, bbox.se, bbox.sw]
    d3.select(document.body).selectAll('div.debug').data([]).exit().remove()
    d3.select(document.body).selectAll('div.debug')
      .data(points)
    .enter().append('div')
      .attr('class', 'debug')
      .style('background-color', 'red')
      .style('width', '4px')
      .style('height', '4px')
      .style('position', 'absolute')
      .style('z-index', 99999)
      .style('left', function(d) { return (d.x - (4 / 2)) + 'px' })
      .style('top', function(d) { return (d.y - (4 / 2)) + 'px' })
  }

  return tip;
}
