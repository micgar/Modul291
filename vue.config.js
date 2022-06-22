const path = require('path')
module.exports = {
    pages: {
        'index': {
            entry: './01a_Basics/02_Exercises/src/main.js',
            //dentry: './01c_Basics/02_Exercises/src/main.js',
            //dentry: './02b_Watchers/02_Exercises/src/main.js',
            //dentry: './04a_Routing-Advanced/01_Intro/src/main.js',
            //entry: './07a_StateMgmt/01_Intro/client/src/main.js',
            //entry: './09a_Client+Server/00_Demo/client/src/main.js',
            //dentry: './09a_Client+Server/01_Intro/client/src/main.js',
            template: 'public/index.html',
            title: 'State in vue'
        }
    },
    chainWebpack: config => {
        config.resolve.alias.set(
            'vue$',
            // If using the runtime only build
            path.resolve(__dirname, 'node_modules/vue/dist/vue.runtime.esm.js')
            // Or if using full build of Vue (runtime + compiler)
            // path.resolve(__dirname, 'node_modules/vue/dist/vue.esm.js')
        )
    }
}
