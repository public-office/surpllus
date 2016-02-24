import webpack from 'webpack';
import path from 'path';

export default {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'stage-0'],
        plugins: ['transform-runtime']
      }
    }, {
      test: /\.(md|markdown|txt)$/,
      loader: 'raw'
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }]
  }
}
