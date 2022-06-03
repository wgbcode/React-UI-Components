// 配置 ts、tsx 导出的模块规则
module.exports = {
    // 入口
    entry: {
        index:'./lib/index.tsx'  // 待转译文件地址
    },  
    // 模块
    module: {
        // 转译规则
        rules: [
            {
                text: /\.tsx?$/ , // 转译的文件类型，以 ts 或者 tsx 结尾（$ 表示以此结尾）
                loader:"awesome-typescript-loader"   // 配置使用的加载程序
            }
        ]
    }
}