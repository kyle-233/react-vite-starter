import { ReactNode, useLayoutEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Footer, Header } from '..'

import styles from './AppLayout.module.scss'

interface AppLayoutProps {
  children: ReactNode
}

export const AppLayout = ({ children }: AppLayoutProps): JSX.Element => {
  const { pathname } = useLocation()
  const [headerVisible, setHeaderVisible] = useState(false)
  const [footerVisible, setFooterVisible] = useState(false)

  useLayoutEffect(() => {
    const route = ['/login', '/register']
    setHeaderVisible(() => {
      return !route.includes(pathname)
    })
    setFooterVisible(() => {
      return !route.includes(pathname)
    })
  }, [pathname])
  return (
    <div className={styles.appLayout}>
      {headerVisible && (
        <header className={styles.header}>
          <Header />
        </header>
      )}
      <main className={styles.main}>{children}</main>
      {footerVisible && (
        <footer className={styles.footer}>
          <Footer />
        </footer>
      )}
    </div>
  )
}
