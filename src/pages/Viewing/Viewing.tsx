import { Outlet, useLocation } from 'react-router-dom';

import { paths } from '../../shared/consts';

import styles from './viewing.module.scss';


export function Viewing() {

  const location = useLocation();

  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <Outlet/>
      </div>
    </div>
  );
}