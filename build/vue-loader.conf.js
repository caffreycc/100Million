'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },
    postcss: [
    //  兼容安卓机器和一些旧浏览器
    require('autoprefixer')({
      // vue官方模板的设置是last 2 versions，相对来说支持浏览器版本过少，会导致你在某些Android机子上出现问题。
    // 如果你使用 last 7 versions 会生成不必要的-ms前缀代码.
    // 因此建议同WeUI一样，使用配置 ['iOS >= 7', 'Android >= 4.1']
      browsers: ['iOS >= 7', 'Android >= 4.1']
    })
  ]
}
