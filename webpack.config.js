const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const development = require('./webpack.dev');
const production = require('./webpack.prod');

module.exports = (env) => {
  const { mode } = env;

  const isDev = mode === 'development';
  const isProd = mode === 'production';

  const commonConfig = common();
  const developmentConfig = development(env);
  const productionConfig = production(env);

  let config;

  if (isDev) {
  	config = merge(commonConfig, developmentConfig);
  }

  if (isProd) {
  	config = merge(commonConfig, productionConfig);
  }

  return config;
};
