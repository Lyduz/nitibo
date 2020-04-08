import axios from 'axios'
// TODO
/**
 * Apply process ENV
 * Apply cookie based bearer token
 */
axios.defaults.baseURL = 'http://127.0.0.1:8000'
axios.defaults.headers.common['Authorization'] = 'Bearer: 1234'

export default axios
