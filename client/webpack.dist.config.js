const webpack = require('webpack');
const path = require('path');
const config = require('./webpack.config');

//设置输出文件配置
config.output = {
	filename: '[name].bundle.js',
	chunkFilename: '[name].min.js',
	sourceMapFilename: '[name].bundle.map',
	publicPath: '',
	path: path.resolve(__dirname, '../server/dist')
};

//设置入口文件
config.entry.app = __dirname+'/app/app.js';

//添加压缩插件
config.plugins.push(
	new webpack.optimize.UglifyJsPlugin({
		comments: false,  //显示注释
		mangle: true,      //代码混淆
		compress: {
			warnings: false //在UglifyJs删除没有用到的代码时不输出警告
		}
	}),
	new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': 'PROD',
      'DEBUG': false
    }
  })
);

module.exports = config;