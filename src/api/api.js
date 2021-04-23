import axios from 'axios'

let host = window.g.ApiUrl
export const getindex = params => { return axios.get(`${host}/api/index/`, { params: params }) }
export const getapi = params => { return axios.get(`${host}/api/api/`) }
/*export const getdetail = params => { return axios.get(`${host}/api/detail/`, { params: params }) }
export const postRegister = params => { return axios.post(`${host}/api/register/`, { params: params }) }*/
