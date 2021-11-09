const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  devtool: "source-map",
  devServer: {
    static: "./dist",
  },
  plugins: [new MiniCssExtractPlugin()],
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.(s[ac]|c)ss$/,
        // use: ["style-loader", "css-loader", "sass-loader"],
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
};
