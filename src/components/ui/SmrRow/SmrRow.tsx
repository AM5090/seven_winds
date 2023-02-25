import { AddedRowIcon } from '../../../assets/icons';
import { TreeRowsResult } from '../../../store/types/rowsApiTypes';

import styles from './smrRow.module.scss';

interface SmrRowType {
  smrRowItem: TreeRowsResult,
}

export function SmrRow({ smrRowItem }: SmrRowType) {
  return (
    <div className={styles.main}>
      <div className={styles.main_row}>
        <div className={styles.text}><AddedRowIcon/></div>
        <div className={styles.text}>Южная строительная площадка</div>
        <div className={styles.text}>100</div>
        <div className={styles.text}>100</div>
        <div className={styles.text}>100</div>
        <div className={styles.text}>100</div>
      </div>
      {smrRowItem?.child?.length > 0 &&
        smrRowItem?.child?.map(item => (
          <SmrRow smrRowItem={item} />
        ))
      }
    </div>
  );
}