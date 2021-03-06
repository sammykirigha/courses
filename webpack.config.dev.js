const webpack = require('webpack')
const path =require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');


process.env.NODE_ENV = 'development';

module.exports = {
	mode: 'development',
	target: 'web',
	devtool: 'cheap-module-source-map',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, "build"),
		filename: 'bundle.js', 
		publicPath: '/',
	},
	devServer: {
		static: path.resolve(__dirname, 'build'),
		port: 3000,
		historyApiFallback: true,
	},
	plugins: [  
		new webpack.DefinePlugin({
			"process.env.API_URL": JSON.stringify("http://localhost:3000")
		}),
		new HtmlWebpackPlugin({
			template: "src/index.html",
		}),
		new ESLintPlugin({
      extensions: ['js'],
		}
		)
	],
	module: {
		rules: [
		
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use:  "babel-loader"
			},
	
			{
				test: /\.css$/,
				use: [
					{
					loader: "style-loader"
					},
					{
					loader: "css-loader"
					},
				]
			}
		]
	}

}