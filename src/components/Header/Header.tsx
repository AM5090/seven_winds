import { Link } from 'react-router-dom';

import { paths } from '../../shared/consts';

import styles from './header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
        <div className="icon"></div>
        <div className="share"></div>
        <Link to={paths.viewing.path} >{paths.viewing.name}</Link>
        <Link to={paths.management.path} >{paths.management.name}</Link>
    </header>
  );
}