/* eslint-disable no-undef */
import router from '@/router'
// 响应拦截器
request.interceptors.response.use(function (response) {
  console.log('响应拦截器', response)
  return response
}, async function (error) {
  // 如果发生了错误，判断是否是401
  console.dir(error)
  if (error.response.status === 401) {
    // 出现401就在这里面 开始处理 ---
    const refreshToken = store.state.tokenInfo.refresh_token
    // if (有refresh_token) {       ---- 有refresh_token
    if (refreshToken) {
      // 1. 请求新token
      try {
        const res = await axios({
          url: 'http://localhost:8000/#/login',
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${refreshToken}`
          }
        })
        console.log('请求新token', res.data.data.token)
        // 2. 保存到vuex
        store.commit('mSetToken', { // mSetToken是前面定义的mutations名字
          refresh_token: refreshToken,
          token: res.data.data.token
        })
        // 3. 重发请求
        //    request是上面创建的axios的实例，它会自动从vuex取出token带上
        return request(error.config)
      } catch (error) {
        // 1. 清除token
        store.commit('mSetToken', {})
        // 2. 去到登录页(如果有token值，就不能到login)
        const backtoUrl = encodeURIComponent(router.currentRoute.fullPath)
        router.push('/login?backto=' + backtoUrl)
        return Promise.reject(error)
      }
    } else {
      // 如果没有refresh_token的时候   ----没有refresh_token
      // 1.去到登录页
      // 2.清除token
      store.commit('mSetToken', {})
      const backtoUrl = encodeURIComponent(router.currentRoute.fullPath) // 回到原来跳过来的的页面,不加?后面的一串就会到首页
      router.push('/login?backto=' + backtoUrl)
      return Promise.reject(error) // 返回错误信息
    }
  } else {
    return Promise.reject(error)
  }
})