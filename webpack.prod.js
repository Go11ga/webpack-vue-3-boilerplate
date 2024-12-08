const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (env) => {
  const { analyzer } = env;

  const plugins = [
    new MiniCssExtractPlugin({
    	filename: 'css/[name].[contenthash:5].css',
    	chunkFilename: 'css/[name].[contenthash:5].css',
    }),
    new CopyPlugin({
    	patterns: [
    		{ from: path.resolve(__dirname, './', '.htaccess'), to: path.resolve(__dirname, 'build', './') },
    	],
    }),
  ];

  if (analyzer) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return {
  	mode: 'production',
    plugins,
    module: {
		  rules: [
	      {
	        test: /\.s[ac]ss$/i,
	        use: [
	          MiniCssExtractPlugin.loader,
	          'css-loader',
	          'sass-loader',
	        ],
	      },
				{
	        test: /\.styl/,
	        use: [
	          'style-loader',
	          'css-loader',
	          'stylus-loader',
	        ],
	      },
		  ],
    },
  };
};
