const { merge } = require('webpack-merge');
const ModuleFederationPLugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common');
const packageJson = require("../package.json")

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: true,
        contentBase: './',
        hot: true

    },
    plugins: [
        new ModuleFederationPLugin({
            name:'container',
            remotes:{
                marketing:'marketing@http://localhost:8081/remoteEntry.js',
                auth:`auth@http://localhost:8082/remoteEntry.js`,
            },
            shared:packageJson.dependencies,
        }),
    ]
};

module.exports = merge(commonConfig, devConfig);
