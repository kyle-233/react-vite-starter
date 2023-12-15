import { RouterView } from 'router'
import styles from './AppLayout.module.scss'

export const AppLayout = (): JSX.Element => {
  return (
    <div className={styles.appLayout}>
      <header className={styles.header}>Header</header>
      <main className={styles.main}>
        <RouterView />
      </main>
      <footer className={styles.footer}>Footer</footer>
    </div>
  )
}
