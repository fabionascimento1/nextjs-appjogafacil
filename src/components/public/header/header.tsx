import styles from '@/styles/Global.module.scss'
import headerStyles from './Header.module.scss'

import Link from 'next/link'

export default function Header () {
  return(
    <div className={styles.container}>
      <div className={headerStyles.header}>
        <h1>
          <Link href="/">
            <a>Joga Fácil</a>
        </Link>
        </h1>
        <div className={headerStyles.sign}>
          <Link href="/login">
            <a>Fazer Login</a>
          </Link>
          <Link href="/signup">
            <a className={headerStyles.signup}>Cadastra-se</a>
          </Link>
        </div>
      </div>
    </div>
  )
}