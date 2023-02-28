const path = require('path')  //导入 node.js 中专门操作路径的模块
const TerserPlugin = require("terser-webpack-plugin")
module.exports = {
    // mode: "development",
    mode: "production",
    entry: path.join(__dirname, './lib/index.js'),  //打包入口文件的路径
    output: {
        path: path.join(__dirname, './dist'), //输出文件的存放路径
        filename: 'g-anything.min.js'  //输出文件的名称，将之前的main.js文件改为了anything.min.js
    },
    optimization: {
        minimize: true,
        minimizer: [
            // 参考 https://qa.1r1g.com/sf/ask/4537294261/
            new TerserPlugin({
                extractComments: false,
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
            }),
        ],
    },
}