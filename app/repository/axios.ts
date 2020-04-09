import axios from 'axios'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'
axios.defaults.headers.common['Authorization'] = 'Bearer: 1234'

export default axios

// TODO
// Apply process ENV
// Apply cookie based bearer token
