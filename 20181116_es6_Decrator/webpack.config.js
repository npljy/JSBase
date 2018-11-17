const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    mode:'development',
    devtool:'inline-source-map',
    entry:path.resolve(__dirname,'src/index.js'),
    output:{
        path:path.resolve(__dirname,'dist'),
        // 占位符 写法[name]
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
                        presets: ['@babel/preset-env'],
                        plugins:[['@babel/plugin-proposal-decorators', { "legacy": true }],'@babel/plugin-proposal-class-properties']
                    }
                }
            }
        ]
    },
    plugins:[
        // 以template制定的文件为模板，在output的目录中生成一个名字为filename的文件
        new HtmlWebpackPlugin({
            filename:'index1.html',
            template:path.resolve(__dirname,'index.html')
        }),
        new CleanWebpackPlugin(["js"], {
            root: __dirname + "/dist/",
            verbose: true,
            dry: false
        }),
    ]
}

module.exports = config;