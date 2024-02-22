import axios, { AxiosRequestHeaders } from 'axios'
import { snakeCaseToCamelCase } from '../tools'

export const request = axios

// Add a request interceptor
axios.interceptors.request.use(
  async (config) => {
    const headerConfigs = {
      ...config.headers,
      'Content-Type': 'application/json;charset=UTF-8;',
    } as AxiosRequestHeaders
    // eslint-disable-next-line no-param-reassign
    config.headers = headerConfigs

    const { method = 'get' } = config
    const action = method.toLocaleUpperCase() === 'POST' ? 'data' : 'params'
    if (config[action] !== undefined && !(config[action] instanceof FormData)) {
      // eslint-disable-next-line no-param-reassign
      config[action] = snakeCaseToCamelCase(config[action], true)
    }
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  },
)

// Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
  },
)

export const get = <Type extends ApiGetType>(
  ...[api, signal, params]: RequestArguments<Type>
): Promise<Type['return']> => {
  return request.get(api, { params, signal })
}

export const post = <Type extends ApiPostType>(
  ...[api, signal, params]: RequestArguments<Type>
): Promise<Type['return']> => {
  return request.post(api, params, { signal })
}
