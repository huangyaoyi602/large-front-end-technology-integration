/*
 * @Author: hyy
 * @Date: 2020-12-21 16:33:19
 * @LastEditors: hyy
 * @LastEditTime: 2020-12-21 16:38:29
 */
const adaptive = require('postcss-adaptive');
 
module.exports = {
  module: {
    loaders: [
      // {
      //   test: /\.css$/,
      //   loader: "style-loader!css-loader!postcss-loader"
      // } //移动端方案
    ]
  },
  // postcss: function () {
  //   return [adaptive({ remUnit: 75 })];
  // } //移动端方案
}