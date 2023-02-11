import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../../components';
import { Navbar } from '../../components';

export function MainLaout() {
  return (
    <Suspense>
      <Header/>
      <main className="app">
        <Navbar/>
        <div className="content">
          <Outlet/>
        </div>
      </main>
    </Suspense>
  );
}