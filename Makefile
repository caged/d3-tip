d3.tip.min.js: clean
	uglifyjs src/d3.tip.js -c -m -o d3.tip.min.js

clean:
	@rm -f d3.tip.min.js