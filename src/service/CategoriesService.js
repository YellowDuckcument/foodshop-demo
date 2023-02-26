import api from "./api";


const list = () => api.get(api.url.categories)
const get = (id) => api.get(`${api.url.categories}/${id}`)
const add = (data) => api.post(api.url.categories, data)
const update = (id, data) => api.post(`${api.url.categories}/${id}`, data)
const remove = (id) => api.post(`${api.url.categories}/${id}`)

const CategoriesService = {
    list,
    get,
    add,
    update,
    delete: remove,
}

export  default CategoriesService




