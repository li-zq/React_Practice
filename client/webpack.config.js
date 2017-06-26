const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	devtool: 'source-map',
	entry: {
		vendor: 'jquery'   //公共库
	},
	//各种loader
	module: {
		rules: [
			{
				test: /\.less$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'less-loader'
					}
				]
			},{
				test: /\.jsx$/,
				use: ['jsx-loader','babel-loader']
			},{
				test: /\.css$/,
				use: 'css-loader'
			},{
				test: /\.js$/,
				use: ['jsx-loader','babel-loader']
			},{
				test: /\.html$/,
				use: 'html-loader'
			},{
				test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        		use: 'file-loader'
			}
		]
	},
	//公用插件
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname+'/app/index.html',
			inject: 'body',
			hash: true
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),
		//全局挂载插件,即全局变量
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
	]
}

