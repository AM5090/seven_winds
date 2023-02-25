import { useEffect } from 'react';

import { useGetTreeRowsQuery } from '../../store/rtk/rowsApiQuerys';

export function SmrPage() {

  const { data = [] } = useGetTreeRowsQuery();

  useEffect(() => {
    console.log(data);
  },[data]);

  return (
    <></>
  );
} 