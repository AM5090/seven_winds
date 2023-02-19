import { Suspense, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { Header, Navbar } from '../../components';
import { paths } from '../../shared/consts';

import styles from './mainLaout.module.scss';

export function MainLaout() {

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate(`/${paths.viewing.path}`);
    } 
  },[]);

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