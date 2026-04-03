const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let production = process.env.NODE_ENV === "production";

let config = {
    mode: "development",
    entry: "./src/adventure.tsx",
    output: {
        filename: "adventure-bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    devServer: {
        static: "./dist"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /(\.tsx$|\.ts$)/,
                exclude: /node_modules/,
                use: "ts-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {from: "./src/images", to: "images"},
                {from: "./src/bootstrap", to: "bootstrap"},
            ]
        }),
        new HtmlWebpackPlugin({
            template: "./adventure.html",
            filename: "adventure.html"
        })
    ]
}

if (production) {
    config.mode = "production";
    config.plugins = [
        new CopyPlugin({
            patterns: [
                {from: "./src/images", to: "images"},
            ]
        }),
        new HtmlWebpackPlugin({
            template: "./adventure_prod.html",
            filename: "adventure.html"
        })
    ];
}

module.exports = config;