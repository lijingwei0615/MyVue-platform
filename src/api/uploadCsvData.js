import request from '../utils/request'

export const uploadCsvData = (params) => {
    return request({
        url: "/user/uploadCsvData",
        method: 'post',
        data: params,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
