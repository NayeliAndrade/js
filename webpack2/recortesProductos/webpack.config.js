const Htmlwebpackplugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");
const basepath = __dirname;
const distpath = "dist";

module.exports = {
    resolve:{
        extensions:[".js",".html",".css"],
        
    },
    entry:{
        app:"./src/js/main.js"
    },
    output:{
        path:path.join(basepath,distpath),
        filename:"main.js"
    },
    module:{
        rules:[
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use:{
                    loader:"babel-loader"
                },
            },
            {
                test: /\.html$/i,
                use:[{
                    loader:"html-loader",
                    options:{
                        minimize:true,
                    }
                }]
            },
            {
                test: /\.css$/i,
                use:[
                    MiniCssExtractPlugin.loader,"css-loader"],
            }
        ]
    },
    plugins:[
        new Htmlwebpackplugin({
            template:"./src/index.html",
            filename:"./index.html"
        }),
        new MiniCssExtractPlugin(),
    ]
}