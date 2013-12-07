d3-tip.min.js: d3-tip.js node_modules/uglify-js bower_components clean
	node_modules/.bin/uglifyjs $< -c -m -o $@

clean:
	@rm -f d3-tip.min.js

node_modules/uglify-js:
	npm install uglify-js
bower_components:
	bower install
