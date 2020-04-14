import qs from 'qs'

export const Config = {
  baseURL: TNS_API_URL,
  headers: {
    common: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  },
  timeout: 30000,
  withCredentials: true,
  paramsSerializer: (params: string): string =>
    qs.stringify(params, { indices: false }),
}
