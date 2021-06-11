import request from '../utils/request'

export const uploadCsvData = (params) => {
    return request({
        url: "/api/user/uploadCsvData",
        method: 'post',
        data: params,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
