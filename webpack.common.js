const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = () => ({
  	entry: path.resolve(__dirname, 'src', 'main.js'),
	  output: {
	    path: path.resolve(__dirname, 'build'),
	    publicPath: "/",
	    filename: '[name][contenthash].js',
	    clean: true,
	  },
	  resolve: {
	    alias: {
	      '@': path.resolve(__dirname, './src'),
	    },
	    extensions: ['.js', '.vue', '.json', '.css', '.scss'],
	  },
	  plugins: [
	    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html'), favicon: path.resolve(__dirname, 'public', 'favicon.ico'), title: 'Title' }),
	    new webpack.ProgressPlugin(),
	    new VueLoaderPlugin(),
	    new webpack.DefinePlugin({
	      __VUE_OPTIONS_API__: 'true',
	      __VUE_PROD_DEVTOOLS__: 'false',
	      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
	    }),
	  ],
	  module: {
		  rules: [
		    {
		      test: /\.m?js$/,
		      exclude: /node_modules/,
		      loader: 'babel-loader',
		    },
		    {
	        test: /\.vue$/,
	        loader: 'vue-loader',
	      },
	      {
	        test: /\.(png|svg|jpg|jpeg|gif)$/i,
	        type: 'asset/resource',
	      },
	      {
	        test: /\.(eot|ttf|woff|woff2)$/,
	        type: 'asset/resource',
	      },
		  ],
	  },
	  stats: {
	  	colors: true,
	  	children: false,
	  	chunks: true,
	  	chunkModules: false,
	  	modules: false,
	  	builtAt: true,
	  	chunksSort: 'name',
	  	env: true,
	  },
});
