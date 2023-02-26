import { NavLink } from 'react-router-dom';

import { BurgerMenuIcon, SharedIcon } from '../../assets/icons';

import { paths } from '../../shared/consts';
import { Select } from '../../widgets';

import styles from './header.module.scss';

export function Header() {
  return (
    <header className={styles.wrap}>
      <div className={styles.top}>
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
      </div>
      <div className={styles.bottom}>
        <Select/>
        <div className={styles.files}>
          <div className={styles.open_file}>
            Строительно-монтажные работы
          </div>
        </div>
      </div>
    </header>
  );
}