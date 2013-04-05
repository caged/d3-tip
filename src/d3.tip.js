// Public - contructs a new tooltip
//
// Returns a tip
d3.svg.tip = function() {
  var orient = 'top',
      offset = d3_svg_offset,
      text   = d3_svg_text,
      node   = init_node(),
      svg    = null,
      point  = null;

  function tip(svg) {
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
    var bbox = get_screen_bbox()
    console.log(bbox)
    node.style.display = 'block'
    var content = text.apply(this, arguments)
    node.innerText = content
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
        bbox   = {}, x, y,
        matrix = target.getScreenCTM()

    x = target.x ? target.x : target.cx
    y = target.y ? target.y : target.cy
    width = target.width ? target.width : target.r
    height = target.height ? target.height : target.r

    point.x = x.animVal.value + document.body.scrollLeft
    point.y = y.animVal.value + document.body.scrollTop
    bbox.nw = point.matrixTransform(matrix)
    point.x += width.animVal.value
    bbox.ne = point.matrixTransform(matrix)
    point.y += height.animVal.value
    bbox.se = point.matrixTransform(matrix)
    point.x -= width.animVal.value
    bbox.sw = point.matrixTransform(matrix)

    return bbox
  }

  return tip;
}
