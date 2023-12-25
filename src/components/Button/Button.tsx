import { Button as TButon, ButtonProps } from 'tdesign-react'
import styles from './Button.module.scss'

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <TButon className={`${styles.button} ${className ? className : ''}`} {...props}>
      {children}
    </TButon>
  )
}
