import DefaultTheme from 'vitepress/theme'
import './styles/custom.css'
import myLayout from './Layout.vue'

export default {
    extends: DefaultTheme,
    Layout: myLayout
}
