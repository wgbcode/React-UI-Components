// 导入路径
const path = require('path')
// 配置 ts、tsx 导出的模块规则
module.exports = {
    // 入口
    entry: {
        index:'./lib/index.tsx'  // 待转译文件地址
    },
    // 出口
    output: {
        path: path.resolve(__dirname, 'dist/lib'),  // 绝对路径；path.resolve() 将 __dirname 和 dist/lib 连起来；__dirname 指当前路径
        library: 'React UI',
        libraryTarget: "umd"  // umd: 统一模块定义 
        
    },
    // 模块
    module: {
        // 转译规则
        rules: [
            {
                test: /\.tsx?$/ , // 转译的文件类型，以 ts 或者 tsx 结尾（$ 表示以此结尾）
                loader:"awesome-typescript-loader"   // 检查类型并将 ts 文件转译成 js 文件
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader', // 把 svg 文件转译成雪碧图
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ],
    },
    // 解析或决策
    resolve: {
        extensions:['.ts','.tsx','.js','.jsx']  // 扩展支持类型
    },
}