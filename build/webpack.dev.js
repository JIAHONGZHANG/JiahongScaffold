const webpack = require('webpack');

const devConfig = {
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		overlay: true,
		contentBase: './dist',
		open: true,
		port: 8080,
		hot: true,
		proxy: {
			'/api/*': {
				target: 'http://localhost:3000',
				secure: false
			}
		}
	},
	module: {
		rules: [{
			test: /\.scss$/,
			use: [
				'style-loader', 
				{
					loader: 'css-loader',
					options: {
						importLoaders: 3
					}
				},
				'postcss-loader',
				'sass-loader'
			]
		}, {
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader',
				'postcss-loader'
			]
		}]
	},
	optimization:{
		splitChunks: {
			chunks: 'async',
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10,
					name: 'vendors',
				},
			  common:{
				  test: /[\\/]src[\\/]component[\\/]/,
				  priority: -20,
				  name: 'common'
			  }
			}
		  }
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	output: {
		filename: '[name].js',
		chunkFilename: '[name].js',
	}
}

module.exports = devConfig;