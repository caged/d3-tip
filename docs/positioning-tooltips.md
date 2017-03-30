[API Documentation](index.md) ➤ Positioning tooltips

# Positioning tooltips

### tip.direction(direction)
Sets the position of a tooltip relative to a target element.  `direction` can be
`n`, `s`, `e`, `w`, `nw`, `ne`, `sw` or `se`.  The direction will also automatically be included as a classname
on the tooltip element which allows for different style hooks based on the direction.

``` javascript
tip.direction('n') // Position the tooltip to the top of a target element
tip.direction('s') // Position the tooltip to the bottom of a target element
tip.direction('e') // Position the tooltip to the right of a target element
tip.direction('w') // Position the tooltip to the left of a target element
```

Callbacks are supported for changing the direction programatically,
with the tooltip passed as `this`.

``` javascript
tip.direction(function(d) {
  if (d === 'california') return 'w'
  if (d === 'new york') return 'e'
})
```

### tip.offset([values])
Offset a tooltip relative to its calculated position.  Offset is computed from
`[top, left]`.

If you want to draw extenders on tooltips, use this method to offset the tooltip
enough in the desired direction so the extender doesn't overlap the target element.

``` javascript
tip.offset([10, -10])
```

Callbacks are also supported for dynamic positioning, with the tooltip passed
as `this`.  The following example will center tip placement within the bounding
box of the target element.

``` javascript
tip.offset(function() {
  return [this.getBBox().height / 2, 0]
})
```

### tip.rootElement([function|Node])
You can also specify the rootElement which is `document.body` by default.

```javascript
var tip = d3.tip()
  .attr('class', 'd3-tip')
  .rootElement(document.getElementById('graph'))
  .html(function(d) { return d; })

```
