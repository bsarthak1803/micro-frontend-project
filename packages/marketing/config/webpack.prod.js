const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJSON = require("../package.json");

const domain = process.env.PRODUCTION_DOMAIN; //env variable determined during build time /CI-CD pipeline

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "marketing",
      filename : 'remoteEntry.js',
      exposes: {
        "./MarketingApp": "./src/bootstrap",
      },
      shared: packageJSON.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
