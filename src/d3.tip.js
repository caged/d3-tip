// Public - contructs a new tooltip
//
// Returns a tip
d3.svg.tip = function() {
  var orient = 'top',
      offset = d3_svg_offset,
      text = d3_svg_text,
      node = init_node()

  function tip() {
    document.body.appendChild(node)
  }

  function d3_svg_offset() {
    return [0, 0];
  }

  function d3_svg_text() {
    return ' ';
  }

  tip.show = function(v) {

  }

  tip.hide = function(v) {

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

  // Public: Sets or gets the padding on all sides for the tooltip
  //
  // v - Padding value as a number
  //
  // Returns padding or tip
  tip.padding = function(v) {
    if (!arguments.length) return padding;
    padding = v;
    return tip;
  };

  // Public: Sets or gets the corner radius of the tooltip on all sides
  //
  // v - Radius as a Number
  //
  // Returns cornerRadius or tip
  tip.cornerRadius = function(v) {
    if (!arguments.length) return cornerRadius;
    cornerRadius = v;
    return tip;
  };

  // Public: Sets or gets the size of the stem
  //
  // v - size of the stem
  //
  // Returns stemSize or tip
  tip.stemSize = function(v) {
    if (!arguments.length) return stemSize;
    stemSize = v;
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
    return node
  }


  return tip;
}
