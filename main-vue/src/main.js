import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start } from './mini-qiankun/index'
// import { registerMicroApps, start } from 'qiankun'
Vue.config.productionTip = false

console.log('VUE_APP_SUB_WEB', process.env.VUE_APP_SUB_WEB)
const apps = [
  {
    name: 'sub-vue',
    // entry: process.env.VUE_APP_SUB_WEB,
    entry: 'http://localhost:8086/',
    container: '#subapp-viewport',
    activeRule: '/sub-vue'
  },
  {
    name: 'sub-app',
    // entry: process.env.VUE_APP_SUB_WEB,
    entry: 'http://localhost:8089/',
    container: '#subapp-viewport',
    activeRule: '/sub-app'
  },
  {
    name: 'vueApp',
    // entry: process.env.VUE_APP_SUB_WEB,
    entry: 'http://localhost:10001/',
    container: '#subapp-viewport',
    activeRule: '/vue'
  },
]
// 当匹配到activeRule的时候，请求获取entry资源，渲染到container中
registerMicroApps(apps) // 注册应用
start({
  sandbox: {
    strictStyleIsolation: true, // 使用shadow dom解决样式冲突
    experimentalStyleIsolation: true // 通过添加选择器范围来解决样式冲突
  }
}) // 开启应用
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
