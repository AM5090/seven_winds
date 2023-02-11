import { NavLink } from 'react-router-dom';

import { paths } from '../../shared/consts';

import styles from './header.module.scss';

export function Header() {
  return (
    <header className={styles.wrap}>
        <div className={styles.icon}></div>
        <div className={styles.share}></div>
        <NavLink 
            to={paths.viewing.path}
            className={({ isActive }) => { return isActive ? styles.active : ''; }}
        >
            {paths.viewing.name}
        </NavLink>
        <NavLink 
            to={paths.management.path}
            className={({ isActive }) => { return isActive ? styles.active : ''; }}
        >
            {paths.management.name}
        </NavLink>
    </header>
  );
}