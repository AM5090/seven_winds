import { Select } from '../../widgets';

import styles from './navbar.module.scss';

export function Navbar() {
  return (
    <nav className={styles.wrap}>
        <Select/>
    </nav>
  );
}