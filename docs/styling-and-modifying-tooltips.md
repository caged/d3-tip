[API Documentation](index.md) ➤ Styling and modifying tooltips

# Styling and modifying tooltips
Tooltips make no assumption about how they will be styled.  Any style is left up
to the user.

### tip.style
A proxy to d3's [selection.style](https://github.com/mbostock/d3/wiki/Selections#wiki-style).

### tip.attr
A proxy to d3's [selection.attr](https://github.com/mbostock/d3/wiki/Selections#wiki-attr).

### Example Styles
``` css
.d3-tip {
  line-height: 1;
  font-weight: bold;
  padding: 12px;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  border-radius: 2px;
}

/* Creates a small triangle extender for the tooltip */
.d3-tip:after {
  box-sizing: border-box;
  display: inline;
  font-size: 10px;
  width: 100%;
  line-height: 1;
  color: rgba(0, 0, 0, 0.8);
  content: "\25BC";
  position: absolute;
  text-align: center;
}

/* Style northward tooltips differently */
.d3-tip.n:after {
  margin: -1px 0 0 0;
  top: 100%;
  left: 0;
}
```