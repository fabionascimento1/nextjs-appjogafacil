import styles from '@/styles/Global.module.scss'
import BannerStyles from './Home-banner.module.scss'
 
 export default function HomeBanner () {
  return (
    <div className={BannerStyles.banner}>
      <div className={styles.container}>
        <h2>Facilitar a locação de horários de quadras esportivas</h2>
        <p>Para que times com horários fixos encontrem adversários.
            Para jogadores encontre peladas e times para fazerem partes.
        </p>
      </div> 
    </div>
  )
}