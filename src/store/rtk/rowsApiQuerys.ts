import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { BASE_URL, GET_TREE_ROWS_ENDPOINT } from '../../shared/consts';
import { TreeRowsResult } from '../types/rowsApiTypes';


export const rowsApi = createApi({
  reducerPath: 'apiID',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getTreeRows: builder.query<TreeRowsResult[], void>({
      query: () => GET_TREE_ROWS_ENDPOINT,
    }),
  }),
});

export const { useGetTreeRowsQuery } = rowsApi;


// getID: builder.mutation<any, void>({
//   query: () => ({
//      url: '/v1/outlay-rows/entity/create',
//      method: 'POST',
//    }),
// }),