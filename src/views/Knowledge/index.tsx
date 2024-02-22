import { useEffect } from 'react'
import { useGet } from '../../hooks'
import { CatFact } from '../../apis'
import styles from './Knowledge.module.scss'

const Knowledge = () => {
  const { controller } = useGet<CatFact>('https://cat-fact.herokuapp.com/facts')
  useEffect(() => {
    return () => {
      //   controller.abort()
    }
  }, [])
  return <div className={styles.knowledge}>Knowledge</div>
}

export default Knowledge
