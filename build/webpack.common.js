const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
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
				chunks: ['runtime', 'vendors', item, 'common']
			})
		)
	});
	return plugins;
}

const configs = {
	entry: {
		index: './src/app.jsx',
		index2: './src/app_2.jsx'
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
					name: '[path]img/[name]_[hash:8].[ext]',
					limit: 1024
				}
			} 
		}, {
			test: /\.(eot|ttf|svg)$/,
			use: {
				loader: 'file-loader',
				options:{
					name: '[path]font/[name]_[hash:8].[ext]',
				}
			} 
		},{
			test: /.ico$/,
			use:{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
				  }
			}
		}]
	},
	optimization: {
		runtimeChunk: {
			name: 'runtime'
		},
		usedExports: true,
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

