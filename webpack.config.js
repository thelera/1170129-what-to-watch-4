const path = require(`path`);

module.exports = {
  entry: `./src/index.tsx`,
  output: {
    filename: `bundle`,
    path: path.join(__dirname, `public`),
    publicPath: `/`,
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    open: true,
    port: 1337,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`
        }
      },
      {
        test: /\.(tsx|ts)?$/,
        loader: `ts-loader`
      }
    ]
  },
  resolve: {
    extensions: [`.ts`, `.tsx`, ``, `json`]
  },
  devtool: `source-map`,
};