import styles from './empty.module.scss';

interface EmptyType {
  pageName?: string,
}

export function Empty({ pageName }: EmptyType) {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>
        {pageName ? `Страница ${pageName} пока пустая` : 'Эта страница пока пустая'}
      </h2>
    </div>
  );
}