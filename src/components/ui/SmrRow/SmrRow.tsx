import { useState } from 'react';

import { AddedRowIcon } from '../../../assets/icons';
import { TreeRowsResult } from '../../../store/types/rowsApiTypes';

import styles from './smrRow.module.scss';
import { SmrRowItem } from './SmrRowItem';

interface SmrRowType {
  smrRowItem?: TreeRowsResult,
}

export function SmrRow({ smrRowItem }: SmrRowType) {

  const [editDataItem, setEditDataItem] = useState(false);


  return (
    <div className={styles.main}>
      <div className={styles.main_row} 
        onDoubleClick={() => setEditDataItem(true)}
      >
        <div className={styles.icon}>
          {editDataItem ? 
            <div onClick={() => setEditDataItem(false)}>Отменить</div> :
            <AddedRowIcon/>
          }
        </div>
        <SmrRowItem editRow={editDataItem} className={styles.text}>Южная строительная площадка</SmrRowItem>
        <SmrRowItem editRow={editDataItem} className={styles.text}>100</SmrRowItem>
        <SmrRowItem editRow={editDataItem} className={styles.text}>100</SmrRowItem>
        <SmrRowItem editRow={editDataItem} className={styles.text}>100</SmrRowItem>
        <SmrRowItem editRow={editDataItem} className={styles.text}>100</SmrRowItem>
      </div>
      {smrRowItem && smrRowItem?.child?.length > 0 &&
        smrRowItem?.child?.map(item => (
          <SmrRow smrRowItem={item} />
        ))
      }
    </div>
  );
}