import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { paths } from '../../shared/consts';
import { Select } from '../../widgets';
import { Menu, MenuListType } from '../Menu';

import styles from './navbar.module.scss';

export function Navbar() {

  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState<MenuListType[]>([]);

  useEffect(() => {
    if(location.pathname === `/${paths.viewing.path}`) {
      const menuList: MenuListType[] = Object.values(paths?.viewing?.pages);
      console.log(menuList);
      setActiveMenu(menuList);
    } else if(location.pathname === `/${paths.management.path}`) {
      setActiveMenu([]);
    }
  }, [location.pathname]);

  return (
    <nav className={styles.wrap}>
      <Select/>
      <Menu menuList={activeMenu} />
    </nav>
  );
}