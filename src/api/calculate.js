import request from '@/utils/request';

export function deleteResource(array) {
    return request({
        url: '/resource/deleteResource',
        method: 'post',
        data: array
    });
}

export function updateResouce(array) {
    return request({
        url: '/resource/updateResource',
        method: 'post',
        data: array
    });
}

export function showResource(array) {
    return request({
        url: '/resource/showResource',
        method: 'post',
        data: array
    });
}

export function addResource(array) {
    return request({
        url: '/resource/addResource',
        method: 'post',
        data: array
    });
}
