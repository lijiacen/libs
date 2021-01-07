const path = require('path');
const resolve = require("rollup-plugin-node-resolve");//帮助Rollup查找外部模块,然后导入
const commonjs = require("rollup-plugin-commonjs");//commonjs插件,打包commonjs代码
const babel = require("rollup-plugin-babel");//babel插件，把代码转为es5，适配更多浏览器
const json = require("@rollup/plugin-json");//打包json文件
const { terser } = require("rollup-plugin-terser");//压缩文件
const vue = require("rollup-plugin-vue"); //打包vue文件
const postcss = require("rollup-plugin-postcss");//打包样式文件


const inputPath = path.resolve(__dirname, './src/index.js');
const outputPath = path.resolve(__dirname, './dist/index.min.js');

module.exports = {
  input: inputPath,
  output: {
    file: outputPath,
    format: 'es',
    name: "data_v",
    globals: {
      vue: 'vue'
    }
  },
  plugins: [resolve(), commonjs(), babel({
    exclude: "node_modules/**"
  }), json(), terser(), vue(), postcss({
    plugins: []
  })],
  external: ['lodash', 'vue']//external中的变量，都当作外部变量引用，防止冗余
};