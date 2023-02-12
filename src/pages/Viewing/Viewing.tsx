import { Outlet } from 'react-router-dom';

import styles from './viewing.module.scss';

export function Viewing() {
  return (
    <div className={styles.wrap}>
      <div className={styles.files}>

      </div>
      <div className={styles.content}>
        <Outlet/>
      </div>
    </div>
  );
}