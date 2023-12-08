import MainOnlinePaymentPage from '../pages/MainOnlinePaymentPage';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import NotFound from '../pages/NotFound';
import PayementSuccessPage from '../pages/PayementSuccessPage';
import App from '../App';

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
