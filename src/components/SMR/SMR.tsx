import { useEffect } from 'react';

import { useGetTreeRowsQuery } from '../../store/rtk/rowsApiQuerys';
import { SmrRow } from '../ui';

import styles from './smr.module.scss';

export function SmrPage() {

  const { data = [] } = useGetTreeRowsQuery();

  useEffect(() => {
    console.log(data);
  },[data]);

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <div className={styles.text}>Уровень</div>
        <div className={styles.text}>Наименование работ</div>
        <div className={styles.text}>Основная з/п</div>
        <div className={styles.text}>Оборудование</div>
        <div className={styles.text}>Накладные расходы</div>
        <div className={styles.text}>Сметная прибыль</div>
      </div>
      <div className={styles.content}>
        {data?.length > 0 &&
          data?.map(item => (
            <SmrRow smrRowItem={item}/>
          ))
        }
        <SmrRow />
      </div>
    </div>
  );
}