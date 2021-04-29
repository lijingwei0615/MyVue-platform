import request from '../utils/request'

export const getUser = () => {
    return request({
        url: "/user/getUser",
        method: 'get'
    })
}