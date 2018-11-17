const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = {
    mode:'development',
    devtool:'inline-source-map',
    entry:path.resolve(__dirname,'src/index.js'),
    output:{
        path:path.resolve(__dirname,'dist'),
        // 占位符 写法[name]
        // [chunkhash] 根据内容生成一个hash值，内容不变，hash不变
        filename:'[name]-[chunkhash].js'
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options: {
                        // babel@7 新书写方式
                        presets: ['@babel/preset-env'],
                        plugins:[['@babel/plugin-proposal-decorators', { "legacy": true }],'@babel/plugin-proposal-class-properties']
                    }
                }
            }
        ]
    },
    plugins:[
        // 以template制定的文件为模板，
        // 在output的目录中生成一个名字为filename的文件
        // 这个文件自动引用 打包之后的文件链接
        new HtmlWebpackPlugin({
            filename:'index1.html',
            template:path.resolve(__dirname,'index.html')
        }),
        // 每次打包,自动清除之前的打包文件
        new CleanWebpackPlugin(["js"], {
            root: __dirname + "/dist/",
            verbose: true,
            dry: false
        }),
    ]
}

module.exports = config;