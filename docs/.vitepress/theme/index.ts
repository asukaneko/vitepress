import DefaultTheme from 'vitepress/theme'
import './styles/index.css'
import myLayout from './Layout.vue'
import 'virtual:group-icons.css' //代码组样式
import { NProgress } from 'nprogress-v2/dist/index.js' // 进度条组件
import 'nprogress-v2/dist/index.css' // 进度条样式
import Linkcard from "./components/Linkcard.vue"
import confetti from "./components/confetti.vue"
import ArticleMetadata from "./components/ArticleMetadata.vue"
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';


export default {
    extends: DefaultTheme,
    enhanceApp({app}) { 
    // 注册全局组件
    app.component('Linkcard' , Linkcard)
    app.component('confetti' , confetti)
    app.component('ArticleMetadata' , ArticleMetadata)
    },
    Layout: myLayout,
    setup() {   
    // Get frontmatter and route
    const { frontmatter } = useData();
    const route = useRoute();
        
    // giscus配置
    giscusTalk({
      repo: 'asukaneko/vitepress', //仓库
      repoId: 'R_kgDOPrMWKg', //仓库ID
      category: 'General', // 讨论分类
      categoryId: 'DIC_kwDOPrMWKs4CvFPT', //讨论分类ID
      mapping: 'pathname',
      inputPosition: 'bottom',
      lang: 'zh-CN',
      }, 
      {
        frontmatter, route
      },
      //默认值为true，表示已启用，此参数可以忽略；
      //如果为false，则表示未启用
      //您可以使用“comment:true”序言在页面上单独启用它
      true
    );

    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
    }
    
}