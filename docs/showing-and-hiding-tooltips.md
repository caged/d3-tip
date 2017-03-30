[API Documentation](index.md) ➤ Showing and hiding tooltips

# Showing and hiding tooltips

### tip.show
Show a tooltip on the screen.

``` javascript
rect.on('mouseover', tip.show)
```

``` javascript
rect.on('mouseover', function(d, i) {
  tip.show(d, i)
})
```

#### Explicit targets
Sometimes you need to manually specify a target to act on.  For instance, maybe
you want the tooltip to appear over a different element than the one that triggered
a `mouseover` event.  You can specify an explicit target by passing an `SVGElement`
as the last argument.

``` javascript
tip.show(data, target)
```


### tip.hide
Hide a tooltip

``` javascript
rect.on('mouseout', tip.hide)
```

``` javascript
rect.on('mouseout', function(d) {
  tip.hide(d)
})
```
