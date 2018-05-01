export default {
  input:    'index.js',
  external: ['d3-selection', 'd3-collection'],
  output:   {
    globals: { 'd3-selection': 'd3', 'd3-collection': 'd3' },
    file:    'dist/index.js',
    name:    'd3.tip',
    extend:  true,
    format:  'umd',
  },
}
