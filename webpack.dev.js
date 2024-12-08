const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = (env) => {
  const platform = env.platform ?? 'desktop';

  return {
    mode: 'development',
	  plugins: [
	    new webpack.DefinePlugin({
	    	__PLATFORM__: JSON.stringify(platform),
	    }),
	    new ESLintPlugin({
	      extensions: ['js', 'vue'],
	    }),
	  ],
	  module: {
		  rules: [
	      {
	        test: /\.s[ac]ss$/i,
	        use: [
	          'style-loader',
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
	  devtool: 'inline-source-map',
	  devServer:
	  {
	    port: env.port ?? 3000,
	    open: false,
	    client: {
	      overlay: false,
	    },
	    historyApiFallback: true,
	  },
  };
};
