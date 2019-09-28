import {
  request
} from 'network/request.js'
export function getDetailInfo (id) {
  return request({
    url: '/api/detail.json?id=' + id
  })
}
