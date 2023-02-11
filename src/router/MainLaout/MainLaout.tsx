import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header, Navbar } from '../../components';

import styles from './mainLaout.module.scss';

export function MainLaout() {
  return (
    <Suspense>
      <Header/>
      <main className={styles.app}>
        <Navbar/>
        <div className={styles.content}>
          <Outlet/>
        </div>
      </main>
    </Suspense>
  );
}