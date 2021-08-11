const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        'app': './src/index.tsx'
    },
    output: {
        filename: '[name].[chunkhash:8].js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: [{
                    loader: 'ts-loader'
                }],
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/templates/index.html'
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}