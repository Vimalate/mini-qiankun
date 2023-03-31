import { handleRouter } from './handle-router'
import { rewriteRouter } from './rewrite-router'
let _apps = []
export const getApps = () => _apps
export const registerMicroApps = (apps) => {
  _apps = apps
}
export const start = () => {
  console.log('进入start')
  // 1 监视路由变化
  rewriteRouter()
  // 初始执行匹配
  handleRouter()
}
