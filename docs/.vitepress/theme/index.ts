import DefaultTheme from 'vitepress/theme'
import './styles/index.css'
import myLayout from './Layout.vue'
import 'virtual:group-icons.css' //代码组样式
import { NProgress } from 'nprogress-v2/dist/index.js' // 进度条组件
import 'nprogress-v2/dist/index.css' // 进度条样式
import Linkcard from "./components/Linkcard.vue"
import confetti from "./components/confetti.vue"
import ArticleMetadata from "./components/ArticleMetadata.vue"


export default {
    extends: DefaultTheme,
    enhanceApp({app}) { 
    // 注册全局组件
    app.component('Linkcard' , Linkcard)
    app.component('confetti' , confetti)
    app.component('ArticleMetadata' , ArticleMetadata)
    },
    Layout: myLayout
}

