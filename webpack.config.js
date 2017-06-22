const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        "react-hot-loader/patch",
        "./src/base_style.scss",
        "./src/index.tsx"
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js",
    },

    devtool: "source-map",

    resolve: {
      extensions: [
        ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".css", ".scss", ".sass"
      ],
    },

    plugins: [
        require('autoprefixer'),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'react-hot-ts',
            chunksSortMode: 'dependency',
            template: path.resolve(__dirname, './src/index.ejs')
        }),
    ],

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            {
                test: /\.tsx?$/,
                loaders: [
                    "react-hot-loader/webpack",
                    "awesome-typescript-loader"
                ],
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, "src"),
            }, {
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
        }, {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
        ],
    },

    devServer: {
        hot: true
    }

};
