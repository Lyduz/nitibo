import api from '@/repository/api'

api.route = '/user'

export default {
  login(params?: any): any {
    // do login here
    const response = api.submit(params)
    return response
  },
}
