import styles from "./index.module.scss";
import Navigation from './Navigation';

export const Sidebar = () => {
  return (
    <div className={styles.dashboard}>
      <Navigation />
      <div className={styles['dashboard-main']}>
        <div className={styles['content']}>
          testing
        </div>
      </div>
    </div>
  )
}
export default Sidebar