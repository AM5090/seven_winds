import styles from './select.module.scss';

export function Select() {
    return (
        <div className={styles.wrap}>
            <div className={styles.selected}>
                <div className={styles.title}>
                    Название проекта
                </div>
                <div className={styles.company}>
                    Аббревиатура
                </div>
            </div>
            <div className={styles.select_button}>
                {'>'}
            </div>
        </div>
    );
}