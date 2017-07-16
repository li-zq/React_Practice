const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	devtool: 'source-map',
	entry: {
		'react.all': ['react', 'react-dom', 'react-router-dom']   //公共库
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
				test: /\.(jsx|js)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							cacheDirectory : true,
							presets: [
								['es2015', {modules: false}]
							]
						}
					}
				]
			},{
				test: /\.css$/,
				use: 'css-loader'
			},{
				test: /\.html$/,
				use: 'html-loader'
			},{
				test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        		use: 'file-loader'
			},{
				test: /\.(gif|png|jpg)$/,
				use: 'file-loader?name=img-[name].[ext]'
			}
		]
	},
	//公用插件
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname+'/app/index.html',
			inject: 'body',
			hash: false
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'react.all',
			minChunks: 2
		}),
		//全局挂载插件,即全局变量
    new webpack.ProvidePlugin({
      	React: "react",
      	ReactDom: "react-dom",
      	ReactRouter: "react-router-dom"
    }),
	]
}

