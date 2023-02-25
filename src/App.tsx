import React from 'react';
import { Provider } from 'react-redux/es/exports';

import { RouterProvider } from 'react-router-dom';

import { router } from './router/router';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
