[API Documentation](index.md) ➤ Showing and hiding tooltips

# Showing and hiding tooltips

### tip.show
Show a tooltip on the screen.

``` javascript
rect.on('mouseover', tip.show)
```

``` javascript
rect.on('mouseover', function(d) {
  tip.show(d)
})
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