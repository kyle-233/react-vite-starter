import { ReactNode } from 'react'
import { Footer, Header } from '..'

import styles from './AppLayout.module.scss'

interface AppLayoutProps {
  children: ReactNode
}

export const AppLayout = ({ children }: AppLayoutProps): JSX.Element => {
  return (
    <div className={styles.appLayout}>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}
