import request from '../utils/request'

export const modify = (params) => {
  return request({
    url: "/user/modifyPassword",
    method: 'post',
    data: params,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
