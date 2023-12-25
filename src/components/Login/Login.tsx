import { useNavigate } from 'react-router-dom'
import styles from './Login.module.scss'

export const Login = () => {
  const navigate = useNavigate()
  return (
    <button
      type="button"
      className={styles.button}
      onClick={() => {
        navigate('/login')
      }}
    >
      Log In
    </button>
  )
}
