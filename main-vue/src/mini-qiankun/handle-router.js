import { getApps } from "."
import { importHTML } from './import-html'
import { getPrevRoute } from './rewrite-router'
export const handleRouter = async () => {
  // 2 匹配子应用
  // 2.1 获取当前路由路径
  // 2.2 注册子应用apps里查找
  const apps = getApps()
  // 卸载上一个路由应用
  const prevApp = apps.find((item) => {
    return getPrevRoute().startsWith(item.activeRule)
  })
  // 获取下一个路由应用
  const app = apps.find((item) => getNextRoute().startsWith(item.activeRule))

  // 如果有上一个应用，则先销毁
  if (prevApp) {
    console.log('prevApp', '先销毁')
    await unmount(prevApp)
  }

  // 未匹配上，不做处理
  if (!app) return
  // 3 加载子应用
  const { template,
    getExternalScripts,
    execScripts } = await importHTML(app.entry)
  const container = document.querySelector(app.container)
  container.appendChild(template)
  console.log('container', container)
  // 配置全局环境变量
  window.__POWERED_BY_QIANKUN__ = true
  window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ = app.entry

  const appExports = await execScripts()
  app.bootstrap = appExports.bootstrap
  app.mount = appExports.mount
  app.unmount = appExports.unmount
  console.log(appExports)
  await bootstrap(app)
  await mount(app)
  // getExternalScript().then(res => {
  //   console.log('getExternalScript', res)
  // })
  // 加载 html、js、css
  // const html = await fetch(app.entry).then(item => item.text())
  // console.log('html', html)
  // const container = document.querySelector(app.container)
  // // 客户端渲染需要执行 js 来生成内容
  // // 而浏览器出于安全考虑，不会执行 innerHTML 里的 script
  // container.innnerHTML = html

}


async function bootstrap (app) {
  app.bootstrap && (await app.bootstrap())
}
async function mount (app) {
  app.mount &&
    (await app.mount({
      container: document.querySelector(app.container),
    }))
}
async function unmount (app) {
  app.unmount &&
    (await app.unmount({
      container: document.querySelector(app.container),
    }))
}
