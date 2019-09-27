import axios from 'axios'
export function request (config) {
  // 创建axios实例
  const instance = axios.create({
    timeout: 5000
  })
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })
  instance.interceptors.response.use(result => {
    return result
  }, err => {
    console.log(err)
  })

  return instance(config)
}
