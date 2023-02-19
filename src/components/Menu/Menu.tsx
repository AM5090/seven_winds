import { Link } from 'react-router-dom';

import { MenuListItemIcon } from '../../assets/icons';

import styles from './menu.module.scss';

export interface MenuListType {
	path: string,
	name: string,
	fullName: string,
}

interface MenuType {
	menuList: MenuListType[],
}

export function Menu({ menuList }: MenuType) {
  return (
    <div className={styles.wrap}>

      {Array.isArray(menuList) &&
				menuList?.map((item) => (
				  <Link to={`viewing/${item.path}`} 
				    key={item.path}
				    defaultValue={item.fullName} 
				    className={styles.menu_item}
				  >
				    <MenuListItemIcon/>
				    <div className={styles.text}>{item.name}</div>
				  </Link>
				))
      }
			
    </div>
  );
}