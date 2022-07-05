const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Component } = require('react');


module.exports = {
	entry: './src/index.jsx',
	mode: 'development',
	devtool: 'source-map',//disable production
	plugins: [new HtmlWebpackPlugin({title: 'EmailClient', template: path.resolve(__dirname, 'template/index.html')}),
		new MiniCssExtractPlugin()],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				options: { presets: ['@babel/env', '@babel/preset-react'] }
			},
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', {
					loader: 'sass-resources-loader',
					options: {
						resources: path.resolve(__dirname, 'src/components/App/theme.scss')
					}
				}]
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i, 
				loader: 'file-loader'
			}
		]
	},
	resolve: { extensions: ['*', '.js', '.jsx'] },
	output: {
		path: path.resolve(__dirname, 'dist/'),
		publicPath: '/dist/',
		filename: 'bundle.js'
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		compress: true,
		port: 9000,
	},
};