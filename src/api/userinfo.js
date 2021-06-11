import request from '../utils/request'

export const userinfo = (params) => {
    return request({
        url: "/api/user/getUserInfo",
        method: 'get',
        data: params,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
