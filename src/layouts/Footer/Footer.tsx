import { Link } from 'react-router-dom'
import { Logo } from 'components'
import { GithubIcon } from '../../assets/images'
import styles from './Footer.module.scss'

export const Footer = (): JSX.Element => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.left}>
            <Link to="/">
              <Logo />
            </Link>
            <div className={styles.mediaContent}>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <Link to='https://github.com/kyle-233/react-vite-starter' target='_blank'>
                    <GithubIcon />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.block} />
            <div className={styles.block} />
            <div className={styles.block}>
              <p className={styles.title}>Information</p>
              <ul>
                <li><Link to="#/">Post guidelines</Link></li>
              </ul>
            </div>
            <div className={styles.block}>
              <p className={styles.title}>Legal</p>
              <ul>
                <li><Link to="#/">Terms and Conditions</Link></li>
                <li><Link to="#/">Privacy policy</Link></li>
                <li><Link to="#/">Cookie policy</Link></li>
                <li><Link to="#/">Disclaimer</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <p className={styles.bottom}>
          © 2023 Vessel Galaxies. All rights reserved. - Kyle-vessel.vercel.app
        </p>
      </div>
    </div>
  )
}
