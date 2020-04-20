const path = require('path');
const nodeExternals = require('webpack-node-externals');
const glob = require('glob');

module.exports = [
  {
    entry: glob.sync('./src/**/*.js').reduce((entries, entry) => Object.assign(entries, { [entry.replace('./src/models', '').replace('.js', '')]: entry }), {}),
    externals: [nodeExternals()],
    output: {
      filename: '[name].js',
      libraryTarget: 'commonjs',
      path: path.resolve(__dirname, 'build/models'),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.resolve(__dirname, 'src'),
          exclude: /(node_modules|build)/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: [
                'babel-plugin-transform-object-rest-spread',
                'transform-runtime',
              ],
              presets: ['env', 'stage-3'],
            },
          },
        },
      ],
    },
    target: 'node',
    node: {
      __dirname: false,
    },
  }];