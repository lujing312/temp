export default {
  install(Vue) {
    const tempContexts = require.context('./', true, /\.vue$/)
    tempContexts.keys().forEach(temp => {
      const _component = tempContexts(temp)
      try {
        const num = temp.split('/').slice(-2, -1)[0].split('-')[0]
        if (!num) {
          throw new Error('模板未找到或格式错误错误')
        }
        Vue.component('temp-' + num, _component.default || _component)
      } catch (err) {
        console.log('注册失败')
      }
    })
  }
}