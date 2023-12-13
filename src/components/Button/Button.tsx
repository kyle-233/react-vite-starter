import styles from './Button.module.scss'

interface ButtonProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
    loading?: boolean
    size?: 'small' | 'normal'
    disabled?: boolean
}

export const Button = (props: ButtonProps) => {
    const { onClick } = props
    return (
        <button className={styles.button} type="button" onClick={onClick}>
            Click
        </button>
    )
}
