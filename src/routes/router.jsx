import MainOnlinePaymentPage from '../pages/MainOnlinePaymentPage';
import { lazy } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

// eslint-disable-next-line react-refresh/only-export-components
const App = lazy(() => import('../App'));
import NotFound from '../pages/NotFound';
import PayementSuccessPage from '../pages/PayementSuccessPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<MainOnlinePaymentPage />} />
      <Route path='/page-not-found' element={<NotFound />} />
      <Route path='/payment-successful' element={<PayementSuccessPage />} />
      <Route path='/payment-unsuccessful' element={<PayementSuccessPage />} />
    </Route>
  )
);
