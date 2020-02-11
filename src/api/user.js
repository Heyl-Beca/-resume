import request from '@/utils/request'

export default {
  // 登陆
  login (data) {
    return request({
      url: '/login',
      method: 'post',
      data
    })
  },
  // 获取信息
  getInfo () {
    return request({
      url: '///',
      method: 'get'
    })
  }
}
