// vue 3 的引入方法和使用的结构
import { createApp } from 'vue'
// import Vue from 'vue'

import App from './App.vue'
import router from './router/index'

createApp(App).use(router).mount('#app')



