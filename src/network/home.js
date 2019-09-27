import {
  request
} from 'network/request.js'
export function getHomeInfo (city) {
  return request({
    url: '/api/index.json?city=' + city
  })
}
