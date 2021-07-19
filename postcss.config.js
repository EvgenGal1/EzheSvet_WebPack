module.exports = {
  
  plugins: [
    // префиксы добав
    require('autoprefixer'),
    // сжатия кода. можно откл при использ. OptimizeCssAssetWebpackPlugin()
    // require('cssnano')({
    //   preset: [
    //     'default',
    //     {
    //       // коммит убираем
    //       discardComments: {
    //         removeAll: true
    //       }
    //     }
    //   ]
    // })
  ]
}
