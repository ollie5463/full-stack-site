const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        open: true,
        port: 3000,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                secure: false
            }
        }
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    devtool: "source-map",
    plugins: [new HtmlWebpackPlugin({
        template: './index.html'
    })],
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
						loader: 'babel-loader',
						options: {}, // Empty options uses babel.config.js
					},
                    {
                        loader: "ts-loader",
                        options: {}
                    }
                ]
            },{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {}, // Empty options uses babel.config.js
					},
				],
			}
        ]
    }
}