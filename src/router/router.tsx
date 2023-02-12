import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { Empty } from '../pages';
import { paths } from '../shared/consts';

import { MainLaout } from './MainLaout';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLaout/>} >
      <Route path={paths.viewing.path} element={paths.viewing.element} >
        <Route path={paths.viewing.pages.project.path} element={<Empty/>} />
        <Route path={paths.viewing.pages.objects.path} element={<Empty/>} />
        <Route path={paths.viewing.pages.rd.path} element={<Empty/>} />
        <Route path={paths.viewing.pages.mto.path} element={<Empty/>} />
        <Route path={paths.viewing.pages.smr.path} element={<Empty/>} />
        <Route path={paths.viewing.pages.chart.path} element={<Empty/>} />
        <Route path={paths.viewing.pages.mim.path} element={<Empty/>} />
        <Route path={paths.viewing.pages.workers.path} element={<Empty/>} />
        <Route path={paths.viewing.pages.investments.path} element={<Empty/>} />
      </Route>
      <Route path={paths.management.path} element={paths.management.element} />
      <Route path="*" element={paths.viewing.element} />
    </Route>,
  ),
);
