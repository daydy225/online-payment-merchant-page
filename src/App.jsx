import { Outlet, useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { usePaymentProvider } from './hook';
import { API } from './api';
import { PROVIDER_REDUCER_ACTIONS } from './utils/constants';
import { Toaster, toast } from 'react-hot-toast';
import Loading from './components/Loading';

function App() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { dispatch } = usePaymentProvider();
  const params = new URLSearchParams(window.location.search);
  const token = params.get('token');

  const verifyToken = useCallback(async () => {
    setLoading(true);
    try {
      const res = await API.verifyToken(token);
      if (res) {
        dispatch({
          type: PROVIDER_REDUCER_ACTIONS.addPurchaseData,
          payload: {
            amount: Number(res?.amount),
            info: res?.description,
          },
        });

        return;
      }
    } catch (error) {
      navigate('/page-not-found');
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  }, [token, navigate, dispatch]);

  useEffect(() => {
    if (token) {
      verifyToken();
    } else {
      navigate('/page-not-found');
    }

    return () => {
      dispatch({ type: PROVIDER_REDUCER_ACTIONS.resetState });
      toast.dismiss();
    };
  }, [dispatch, token, verifyToken, navigate]);

  if (loading) return <Loading />;

  return (
    <>
      <Toaster />
      <Outlet />
    </>
  );
}

export default App;
