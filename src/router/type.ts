import { ReactNode } from 'react'

export enum USER_ROLES {
  ADMIN = 'admin',
  TEST = 'test',
}

export interface RouterItemProps<T> {
  path: string
  name?: string
  roles?: USER_ROLES[]
  redirect?: string
  icon?: ReactNode
  element: T
  children?: RouterItemProps<T>[]
}
