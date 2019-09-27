import {
  request
} from 'network/request.js'

export function getCityData () {
  return request({
    url: '/api/city.json'
  })
}
