import {
  request
} from 'network/request.js'
export function getHomeInfo () {
  return request({
    url: '/api/index.json'
  })
}
