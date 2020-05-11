import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/test/test.js',
  output: {
    file: 'test/test.js', format: 'esm'
  },
  plugins: [resolve()]
}