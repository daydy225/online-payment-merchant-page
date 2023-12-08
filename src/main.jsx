import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { PaymentProviderContextProvider } from './context/PaymentProviderContext.jsx';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <PaymentProviderContextProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </PaymentProviderContextProvider>
);
