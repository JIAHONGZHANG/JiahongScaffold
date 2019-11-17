const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const prodConfig = {
	mode: 'production',
	devtool: 'cheap-module-source-map',
	module: {
		rules: [{
			test: /\.scss$/,
			use: [{
				loader: MiniCssExtractPlugin.loader,
				options: {
					publicPath: '../'
				}
			},
			{
				loader: 'css-loader',
				options: {
					sourceMap: true,
					importLoaders: 3
				}
			},
			'postcss-loader',
			{
				loader: 'sass-loader',
				options: {
					sourceMap: true
				}
			}
			]
		}, {
			test: /\.css$/,
			use: [{
				loader: MiniCssExtractPlugin.loader,
				options: {
					publicPath: '../'
				}
			},
				'css-loader',
				'postcss-loader'
			]
		}]
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10,
					name: 'vendors',
				},
				common: {
					test: /[\\/]src[\\/]jsx[\\/]/,
					priority: -20,
					name: 'common'
				}
			}
		},
		minimizer: [
			new OptimizeCSSAssetsPlugin({}),
			new UglifyJsPlugin({
				parallel: true,
				sourceMap: true,
			})
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
			chunkFilename: 'css/[name].chunk.css'
		})
	],
	output: {
		filename: 'js/[name].[contenthash:8].js',
		chunkFilename: 'js/[name].[contenthash:8].js'
	}
}

module.exports = prodConfig;