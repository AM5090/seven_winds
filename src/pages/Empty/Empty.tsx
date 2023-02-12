import styles from './empty.module.scss';

export function Empty() {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>
        Эта страница пока пустая
      </h2>
    </div>
  );
}