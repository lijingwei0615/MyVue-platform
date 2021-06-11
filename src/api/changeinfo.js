import request from '../utils/request'

export const changeinfo = (params) => {
    return request({
        url: "/api/user/updateUserInfo",
        method: 'post',
        data: params,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
