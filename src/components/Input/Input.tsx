import { InputProps, Input as TInput} from 'tdesign-react'

import styles from './Input.module.scss'

export const Input = (props: InputProps) => {
    return (
        <TInput className={styles.input} {...props} />
    )
}
