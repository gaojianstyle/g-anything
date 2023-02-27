const path = require('path')  //导入 node.js 中专门操作路径的模块
const TerserPlugin = require("terser-webpack-plugin")
module.exports = {
    // mode: "development",
    mode: "production",
    entry: path.join(__dirname, './lib/index.js'),  //打包入口文件的路径
    output: {
        path: path.join(__dirname, './dist'), //输出文件的存放路径
        filename: 'anything.min.js'  //输出文件的名称，将之前的main.js文件改为了anything.min.js
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            extractComments: false, //不将注释提取到单独的文件中
        })],
    },
}