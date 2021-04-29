import request from '../utils/request'

export const register = (params) => {
  return request({
    url: "/user/register",
    method: 'post',
    data: params,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
