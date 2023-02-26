import styles from './smrRowItem.module.scss';

interface SmrRowItemType {
  editRow: boolean,
  children: string | number,
  className?: string,
}

export function SmrRowItem({editRow, children, className}: SmrRowItemType) {
  return (
    <>
      {editRow ?
        <div className={className}>
          <input className={styles.edit} defaultValue={children} type={'text'}/>
        </div> :
        <div className={className}>{children}</div>
      }
    </>
  );
}