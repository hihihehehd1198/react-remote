const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const dependencies = require("./package.json").dependencies;
module.exports = {
  mode: "development",
  entry: "./src/App.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: path.resolve(__dirname, "node_modules"),
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "reactRemote",
      filename:'remoteEntry.js',
      shared:{
        ...dependencies,
        react: {
            // react
            singleton: true,
            requiredVersion: dependencies["react"],
            eager:true,
          },
          "react-dom": {
            // react-dom
            eager:true,
            singleton: true,
            requiredVersion: dependencies["react-dom"],
          },
      },
      exposes: {
        "./App": "./src/App.tsx",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    port: 4203,
    liveReload: true,
    watchFiles: [path.resolve(__dirname, '..')], // make sure that hits your host app folder
  },
};
