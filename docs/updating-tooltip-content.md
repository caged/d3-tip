[API Documentation](index.md) ➤ Updating tooltip content

# Updating tooltip content

### tip.html([content])
Set or get a tip's HTML content.

``` javascript
var tip = d3.tip().html(function(d) { return "<span>" + d + "</span>" })
```