import { get, post } from '.'

export const getFetch = async <T extends ApiGetType>(...[api, signal, params]: RequestArguments<T>) => {
  get<T>(...([api, signal, params] as RequestArguments<T>)).then((res) => {
    return res
  })
}
export const postFetch = async <T extends ApiPostType>(...[api, signal, params]: RequestArguments<T>) => {
  post<T>(...([api, signal, params] as RequestArguments<T>)).then((res) => {
    return res
  })
}
