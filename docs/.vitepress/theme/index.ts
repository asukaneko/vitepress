import DefaultTheme from 'vitepress/theme'
import './styles/index.css'
import myLayout from './Layout.vue'
import 'virtual:group-icons.css' //代码组样式
import { NProgress } from 'nprogress-v2/dist/index.js' // 进度条组件
import 'nprogress-v2/dist/index.css' // 进度条样式



export default {
    extends: DefaultTheme,
    Layout: myLayout
}

