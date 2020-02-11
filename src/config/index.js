// 全局config配置
const modeUrlObj = {
  // 生成环境
  'production': {
    baseURL: 'http://xxxx.40///',
    authBaseURL: ''
  },
  // 开发环境
  'development': {
    baseURL: 'http://xxxx.40///',
    authBaseURL: ''
  },
  // 测试环境
  'test': {
    baseURL: 'http://xxxx.40///',
    authBaseURL: ''
  }
}

export default modeUrlObj[process.env.NODE_ENV]
