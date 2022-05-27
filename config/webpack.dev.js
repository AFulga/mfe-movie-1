const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const { DefinePlugin } = require('webpack');

const devConfig = {
    mode : 'development',
    output : {
        publicPath: "http://localhost:8001/"
    },
    devServer : {
        port: 8001,
        historyApiFallback : true,
    },
    plugins : [
        new DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("development"),
				SPACE: JSON.stringify("local"),
			},
		}),
        new ModuleFederationPlugin({
            name : 'movie1',
            filename : 'remoteEntry.js',
            exposes : {
                './MovieApp1' : './src/bootstrap.js'
            },
            shared: packageJson.dependencies
        }),
    ]
}

module.exports = merge(commonConfig, devConfig)
