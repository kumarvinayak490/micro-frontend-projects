const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPLugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common');
const packageJson = require("../package.json")

const domain = process.env.DOMAIN || 'http://localhost:8080';

const prodConfig = {
    mode:'production',
    output:{
        filename:'[name].[contenthash].js',
    },
    plugins:[
        new ModuleFederationPLugin({
            name:'container',
            remotes:{
                marketing:`marketing@${domain}/marketing/remoteEntry.js`,
            },
            shared:packageJson.dependencies,
        })
    ]
}

module.exports = merge(commonConfig,prodConfig);