import { Outlet } from 'react-router-dom';

export function Viewing() {
  return (
    <div className="wrap">
      <div className="files">

      </div>
      <div className="content">
        <Outlet/>
      </div>
    </div>
  );
}