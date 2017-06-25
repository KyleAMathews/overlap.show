var ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.modifyWebpackConfig = function(config, stage) {
  if (stage == 'develop') {
    config.config.loader('styl', function(cfg) {
      cfg.test = /\.styl$/;
      cfg.loader = 'style!css?minimize&sourceMap&modules!postcss!stylus-loader';

      return cfg;
    });
  }

  else {
    config.config.loader('styl', function(cfg) {
      cfg.test = /\.styl$/;
      cfg.loader = ExtractTextPlugin.extract([
        'css?minimize&sourceMap&modules',
        'postcss',
        'stylus-loader',
      ]);

      return cfg;
    });

    config.config.plugin('extract-styl',
      ExtractTextPlugin,
      ['styles.css']
    );
  }

  return config;
};
