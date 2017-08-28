let webpack = require('webpack');
let path = require('path');

module.exports = {
    entry: {
        app: "./src/index.js",
    },
    output: {
        path: path.resolve(__dirname, "dist", "assets"),
        filename: "bundle.js",
        publicPath:  "assets"
    },
    devServer: {
        inline: true,
        contentBase: "./dist",
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["latest", "react", "stage-0"]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "autoprefixer-loader"
                    }
                ]
            }
        ]
    }
};