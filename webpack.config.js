module.exports = {
  entry: './rxjs-example/main.ts',
  output: {
    filename:'./rxjs-example/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.ts?$/,
        loader: 'awesome-typescript-loader?configFileName=./rxjs-example/tsconfig.json'
      }
    ]
  }
};