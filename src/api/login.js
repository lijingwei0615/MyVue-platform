import request from '../utils/request'

export const login = (params) => {
    return request({
        url: "/api/user/login",
        method: 'post',
        data: params,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
