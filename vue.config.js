/*
 * @Author: hyy
 * @Date: 2020-12-21 16:33:19
 * @LastEditors: hyy
 * @LastEditTime: 2021-01-12 14:00:22
 */
// const adaptive = require('postcss-adaptive');
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')

const production = 'development'
 
module.exports = {
    productionSourceMap: false,
    devServer:{
    proxy:{
      '/api':{
        target:'http://localhost:9091',
        pathRewrite:{'^/api':''}
      }
    }//链接服务端
  },
  configureWebpack:config=>{
    if(production){
      const productionGzipExtensions = ['html','js','css']
      config.plugins.push(
        new CompressionWebpackPlugin({
          filename:'[path].gz[query]',
          algorithm:'gzip',
          test:new RegExp(
            '\\.('+productionGzipExtensions.join('|')+')$'
          ),
          threshold:10240,
          minRatio:0.8,
          deleteOriginalAssets:false
        })
      )//开启压缩
      config.devtool = 'cheap-module-eval-source-map'//debug映射
    }
    config.optimization = {
      splitChunks:{
        cacheGroups: {
          vendor:{
          chunks:'all',
          test:'/node_modules',
          name:'vendor',
          minChunks:1,
          maxInitialRequests:5,
          minSize:0,
          priority:100
          },
        common: {
          chunks: 'all',
          test: /[\\/]src[\\/]js[\\/]/,
          name: 'common',
          minChunks:2,
          maxInitialRequests:5,
          minSize:0,
          priority:60
        },
        styles:{
          name:'styles',
          test:/\.(sa|sc|c)ss$/,
          chunks:'all',
          enforce:true
        },
        runtimeChunk:{
          name:'manifest'
        }
        },       
      }
    }//代码切割和公共代码抽取
    config.plugins = [
      new HardSourceWebpackPlugin()
    ]
  },
  // chainWebpack: config => {
  //   config.module
  //         .rule('image')
  //         .use('image-webpack-loader')
  //         .loader('image-webpack-loader')
  //         .options({bypassOnDebug:true})
  //         .end()//图片压缩
  // }
  
}