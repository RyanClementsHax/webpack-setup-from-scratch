module.exports = {
  mode: process.env.NODE_ENV || "development",
  devtool: "source-map",
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
