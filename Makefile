UGLIFYJS = node_modules/uglify-js/bin/uglifyjs
UGLIFYCSS = node_modules/uglifycss/uglifycss

all: d3-tip.min.js d3-tip.min.css

d3-tip.min.js: index.js uglifyjs
	$(UGLIFYJS) $< -c -m -o $@

d3-tip.min.css: examples/example-styles.css uglifycss
	$(UGLIFYCSS) $< > $@

clean:
	@rm -f d3-tip.min.*

uglifyjs: $(UGLIFYJS)
$(UGLIFYJS):
	npm install uglify-js

uglifycss: $(UGLIFYCSS)
$(UGLIFYCSS):
	npm install uglifycss
