import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { API, Config } from '@/repository'
import { UserInterface } from './auth.types'

class AuthAPI extends API {
  public constructor(config: AxiosRequestConfig) {
    super(config)
  }

  /**
   * Get all users.
   *
   * @return  {Promise<UserInterface[]>}
   */
  public async getUsers(): Promise<UserInterface[]> {
    return await this.get<UserInterface[]>('/users')
      .then((response: AxiosResponse<UserInterface[]>) => {
        const { data } = response

        const users: UserInterface[] = data

        return users
      })
      .catch((error: AxiosError) => {
        throw error
      })
  }
}

export const AuthRepository = new AuthAPI(Config)
