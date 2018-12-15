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
        // [hash] 因为这是工程级别的，即每次修改任何一个文件，所有文件名的hash都将改变，所有文件使用同一个hash值。
        //      所以一旦修改了任何一个文件，整个项目的文件缓存都将失效
        // [chunkhash] 具有相互依赖关系的文件打包在同一个模块，使用相同的hash值
        // [contenthash] 是针对文件内容级别的，只有你自己模块的内容变了，那么hash值才改变
        filename:'[name]-[contenthash].js'
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
            filename:'index.html',
            template:path.resolve(__dirname,'index.html')
        }),
        // 每次打包,自动清除之前的打包文件
        new CleanWebpackPlugin(["js"], {
            root: __dirname + "/dist/",
            verbose: true,
            dry: false
        }),
    ],
    devServer:{
        hot: true, // 告诉 dev-server 我们在使用 HMR
	    // contentBase: path.resolve(__dirname),
	    publicPath: '/',
	    port: 8989
    }
}

module.exports = config;