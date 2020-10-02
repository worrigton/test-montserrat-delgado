const path                 = require("path");
const HtmlWebPackPlugin    = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	context : __dirname,
	entry   : "./src/index.js",
	output  : {
		path       : path.resolve(__dirname, "dist"),
		filename   : "main.js",
		publicPath : '/',
	},
	resolve: {
		extensions: [".js", ".jsx",],
	},
	module: {
		rules : [
			{
				test     : /\.(js|jsx)$/,
				exclude  : /node_modules/,
				use      : {
					loader : "babel-loader",
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader : "html-loader",
					},
				],
			},
			{
				test    : /\.(css|scss)$/,
				exclude : /[/\/]node_modules[/\/]/, 
				use     : [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
					"sass-loader",
				],
			},
			{
				test : /\.json$/,
				use  : {
					loader : 'json-loader',
				}
			}
		],
	},
	plugins : [
		new HtmlWebPackPlugin({
			template : "./public/index.html",
			filename : "./index.html",
		}),
		new MiniCssExtractPlugin({ filename : "css/main.css" }),
	],
};