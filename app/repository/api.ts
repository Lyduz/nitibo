import axios from './axios'

export default {
  route: '',

  index(params?: object): object {
    return axios.get(this.route, { params })
  },

  show(id: string, params?: object): object {
    return axios.get(`${this.route}/${id}`, { params })
  },

  create(payload: object): object {
    return axios.post(`${this.route}`, payload)
  },

  update(id: string, payload: object): object {
    return axios.post(`${this.route}/${id}`, payload)
  },

  put(id: string, payload: object): object {
    return axios.put(`${this.route}/${id}`, payload)
  },

  submit(payload: object): object {
    console.log(axios)
    return axios.post(`${this.route}`, payload)
  },
}
