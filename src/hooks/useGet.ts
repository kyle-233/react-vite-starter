import useSWR from 'swr'
import { getFetch } from '../service'

type HookRequestArguments<T extends ApiType> = T['params'] extends Record<string, unknown> | FormData
  ? [api: T['api'], params: T['params']]
  : [api: T['api']]

export const useGet = <T extends ApiGetType>(...[api, params]: HookRequestArguments<T>) => {
  const controller = new AbortController()
  const fetcher = (api: T['api'] | string) => getFetch<T>(...([api, controller.signal, params] as RequestArguments<T>))
  const { data, error, isLoading, isValidating, mutate } = useSWR(api, fetcher as any)
  return {
    data,
    error,
    isLoading,
    isValidating,
    mutate,
    controller,
  }
}
