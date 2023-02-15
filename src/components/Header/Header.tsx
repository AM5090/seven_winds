import { NavLink } from 'react-router-dom';

import { BurgerMenuIcon, SharedIcon } from '../../assets/icons';

import { paths } from '../../shared/consts';

import styles from './header.module.scss';

export function Header() {
  return (
    <header className={styles.wrap}>
      <BurgerMenuIcon/>
      <SharedIcon/>
      <div className={styles.main_pages}>
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
      </div>
    </header>
  );
}