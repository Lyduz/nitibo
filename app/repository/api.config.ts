import qs from 'qs'

export const Config = {
  baseURL: TNS_API_URL,
  headers: {
    common: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  },
  timeout: 30000,
  withCredentials: true,
  paramsSerializer: (params: string): string =>
    qs.stringify(params, { indices: false }),
}
