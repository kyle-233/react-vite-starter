import styles from './Wallet.module.scss'

export const Wallet = () => {
  return (
    <button type="button" className={styles.button}>
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={styles.wallet}>
        <title>Wallet&apos;s Icon</title>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <path d="M24,29H8a5,5,0,0,1-5-5V10A1,1,0,0,1,4,9H24a5,5,0,0,1,5,5V24A5,5,0,0,1,24,29ZM5,11V24a3,3,0,0,0,3,3H24a3,3,0,0,0,3-3V14a3,3,0,0,0-3-3Z" />
          <path d="M26,11a1,1,0,0,1-1-1V7.25a2.33,2.33,0,0,0-.78-1.87,1.94,1.94,0,0,0-1.67-.32L5.78,8.87a1,1,0,0,0-.78,1,1,1,0,0,1-2,0A3,3,0,0,1,5.33,6.92L22.11,3.11a3.9,3.9,0,0,1,3.36.71A4.34,4.34,0,0,1,27,7.25V10A1,1,0,0,1,26,11Z" />
          <path d="M28,23H21a4,4,0,0,1,0-8h7a1,1,0,0,1,1,1v6A1,1,0,0,1,28,23Zm-7-6a2,2,0,0,0,0,4h6V17Z" />
        </g>
        <g>
          <rect className={styles.cls1} height="32" width="32" />
        </g>
      </svg>
    </button>
  )
}
