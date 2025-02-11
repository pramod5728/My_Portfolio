module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        webpackConfig.module.rules.push({
          test: /\.mjs$/,
          resolve: {
            fullySpecified: false,
          },
          use: 'source-map-loader',
          exclude: /node_modules\/@mediapipe\/tasks-vision/,
        });
        return webpackConfig;
      },
    },
  };
  