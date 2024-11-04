const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const { dependencies } = require("./package.json");
module.exports = {
  mode: "development",
  entry: "./src/App.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", '.scss', '.glb', '.html', '.css'],
  },
  module: {

    rules: [
      {
        test: /\.(scss|ts|tsx)$/,
        exclude: path.resolve(__dirname, "node_modules"),
        use: "babel-loader",
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [

    new ModuleFederationPlugin({
      name: "reactRemote",
      filename: "remoteEntry.js",
      shared: {
        ...dependencies,
        react: {
          // react
          singleton: true,
          requiredVersion: dependencies["react"],
          eager: true,
        },
        "react-dom": {
          // react-dom
          eager: true,
          singleton: true,
          requiredVersion: dependencies["react-dom"],
        },
        "react-router-dom": {
          // react-dom
          eager: true,
          singleton: true,
          requiredVersion: dependencies["react-router-dom"],
        },
        "styled-components": {
          // react-dom
          singleton: true,
          eager: true
        },
        "@react-three/drei": {
          // react-dom
          eager: true,
          singleton: true,
          requiredVersion: dependencies["@react-three/drei"],
        },
        "three": {
          // react-dom
          eager: true,
          singleton: true,
          requiredVersion: dependencies["three"],
        },
        "@react-three/fiber": {
          // react-dom
          eager: true,
          singleton: true,
          requiredVersion: dependencies["@react-three/fiber"],
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
    historyApiFallback: true,
    watchFiles: [path.resolve(__dirname, "/react-remote")], // make sure that hits your host app folder
  },
};
