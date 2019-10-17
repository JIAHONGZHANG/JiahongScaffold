const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const devConfig = require('./webpack.dev.js');
const prodConfig = require('./webpack.prod.js');


const makePlugins = (configs) => {
	const plugins = [
		new CleanWebpackPlugin(['dist'], {
			root: path.resolve(__dirname, '../')
		})
	];
	Object.keys(configs.entry).forEach(item => {
		plugins.push(
			new HtmlWebpackPlugin({
				template: 'public/index.html',
				filename: `${item}.html`,
				chunks: ['runtime', 'vendors', item]
			})
		)
	});
	return plugins;
}

const configs = {
	entry: {
		index: './src/app.jsx'
	},
	resolve:{
		extensions: ['.js', '.jsx'],
		alias: {
			'public': path.resolve(__dirname, '../public')
		}
	},
	module: {
		rules: [{ 
			test: /\.(js|jsx)$/, 
			exclude: /node_modules/,
			use: [{
				loader: 'babel-loader'
			}]
		}, {
			test: /\.(jpg|png|gif)$/,
			use: {
				loader: 'url-loader',
				options: {
					name: '[name]_[hash].[ext]',
					outputPath: 'img/',
					limit: 1024
				}
			} 
		}, {
			test: /\.(eot|ttf|svg)$/,
			use: {
				loader: 'file-loader',
				options:{
					outputPath: 'font/'
				}
			} 
		},{
			test: /.ico$/,
			use:{
				loader: 'file-loader'
			}
		}]
	},
	optimization: {
		runtimeChunk: {
			name: 'runtime'
		},
		usedExports: true,
		splitChunks: {
      chunks: 'all',
      cacheGroups: {
      	vendors: {
      		test: /[\\/]node_modules[\\/]/,
      		priority: -10,
      		name: 'vendors',
      	}
      }
    }
	},
	performance: false,
	output: {
		path: path.resolve(__dirname, '../dist')
	}
}

configs.plugins = makePlugins(configs);

module.exports = (env) => {
	if(env && env.production) {
		return merge(configs, prodConfig);
	}else {
		return merge(configs, devConfig);
	}
}

