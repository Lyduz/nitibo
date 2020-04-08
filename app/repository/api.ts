import axios from './axios'

export default {
  route: '',

  index(params?: any): any {
    return axios.get(this.route, { params })
  },

  show(id: string, params?: any): any {
    return axios.get(`${this.route}/${id}`, { params })
  },

  create(payload: any): any {
    return axios.post(`${this.route}`, payload)
  },

  update(id: string, payload: any): any {
    return axios.post(`${this.route}/${id}`, payload)
  },

  put(id: string, payload: any): any {
    return axios.put(`${this.route}/${id}`, payload)
  },

  submit(payload: any): any {
    return axios.post(`${this.route}`, payload)
  },
}
