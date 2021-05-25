import request from '../utils/request'

export const userinfo = (params) => {
    return request({
        url: "/user/getUserInfo",
        method: 'get',
        data: params,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}