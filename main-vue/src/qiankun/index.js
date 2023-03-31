// import { registerMicroApps, start } from 'qiankun'
import { registerMicroApps, start } from '../micro-fe'
import bus from '@/utils/bus'
import store from '@/store'
import Vue from 'vue'

// 将bus挂载在Vue原型，保持父子应用一致
Vue.prototype.$bus = bus

registerMicroApps([
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
  {
    name: 'JXY',
    entry: process.env.VUE_APP_JXY_WEB,
    container: '#subapp-viewport',
    activeRule: '/jxy',
    props: {
      bus,
      systemCode: store.state.systemCode
    }
  }
])

export default start
