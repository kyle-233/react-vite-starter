type Api = string
type Params = Record<string, unknown> | FormData
type Return = Record<string, unknown> | Record<string, unknown>[] | string | number
type Signal = any

interface ApiType {
  api: Api
  method: 'get' | 'post'
  params?: Params
  return?: Return
}

interface ApiSignalType extends ApiType {
  signal: Signal
}

interface ApiGetType extends ApiSignalType {
  method: 'get'
}

interface ApiPostType extends ApiSignalType {
  method: 'post'
}

type RequestArguments<T extends ApiSignalType> = T['params'] extends Record<string, unknown> | FormData
  ? [api: T['api'], signal: T['signal'], params: T['params']]
  : [api: T['api'], signal: T['signal']]

interface AnyObj {
  [key: string]: any
}
