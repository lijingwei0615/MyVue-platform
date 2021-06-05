import request from '../utils/request'

export const getDetailedInfo = (params) => {
    return request({
        url: "/user/getDetailedInfo",
        method: 'get',
        data: params,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
