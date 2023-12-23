import { Link } from 'react-router-dom'
import { Bell, Login, Logo } from 'components'
import styles from './Header.module.scss'

export const Header = (): JSX.Element => {
  return (
    <div className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link to="/">
          <Logo />
        </Link>
      </div>

      {/* Menus */}
      <div className={styles.menus}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/knowledge">KNOWLEDGE</Link>
          </li>
          <li className={styles.item}>
            <Link to="/about">ABOUT</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>

      {/* User */}
      <div className={styles.user}>
        <Login />
        <Bell />
      </div>
    </div>
  )
}
