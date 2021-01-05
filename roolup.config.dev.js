const path = require('path');
const resolve = require("rollup-plugin-node-resolve");//帮助Rollup查找外部模块,然后导入

const inputPath = path.resolve(__dirname, './src/index.js');
const outputPath = path.resolve(__dirname, './dist/index.js');

module.exports = {
  input: inputPath,
  output: {
    file: outputPath,
    format: 'es',
    name: "data_v"
  },
  plugins: [resolve()]
};