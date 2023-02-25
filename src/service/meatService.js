import api from "./api";


const list = () => api.get(api.url.meat)
const get = (id) => api.get(`${api.url.meat}/${id}`)
const add = (data) => api.post(api.url.meat, data)
const update = (id, data) => api.post(`${api.url.meat}/${id}`, data)
const remove = (id) => api.post(`${api.url.meat}/${id}`)

const meatService = {
    list,
    get,
    add,
    update,
    delete: remove,
}

export  default meatService




