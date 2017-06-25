const webpack = require('webpack');
const path    = require('path');
const config  = require('./webpack.config');

//设置输出文件配置(内存中)
config.output = {
  filename: '[name].bundle.js',
  chunkFilename:'[name].min.js',
  publicPath: '',
  path: path.resolve(__dirname, 'client')
};

//设置入口文件
config.entry.app = [
  'webpack-dev-server/client?http://localhost:2017/',//简易express服务器
  'webpack/hot/dev-server',//webpack-dev-server 实现hot加载
   __dirname+'/app/app.js'
];

config.plugins = config.plugins.concat([

  // Adds webpack HMR support. It act's like livereload,
  // reloading page after webpack rebuilt modules.
  // It also updates stylesheets and inline assets without page reloading.
  new webpack.HotModuleReplacementPlugin(),
  // new webpack.DefinePlugin({
  //   'process.env': {
  //     'NODE_ENV': 'DEV',
  //     'DEBUG': true
  //   }
  // })
]);

module.exports = config;
