UGLIFYJS = node_modules/uglify-js/bin/uglifyjs

d3.tip.min.js: clean uglifyjs
	$(UGLIFYJS) index.js -c -m -o d3.tip.min.js

clean:
	@rm -f d3.tip.min.js

uglifyjs: $(UGLIFYJS)
$(UGLIFYJS):
	npm install uglify-js
