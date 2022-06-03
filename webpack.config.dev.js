const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = Object.assign({}, base, {
    mode: "development",
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'   // 作用：在 index.html 的 body 标签中添加 <script src="index.js"></script>
        })
    ]
}
)