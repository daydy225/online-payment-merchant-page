import { useCallback, useEffect, useMemo } from 'react';
import { usePaymentProvider, usePhone } from '../hook';
import PaymentBtn from './PaymentBtn';
import PaymentInput from './PaymentInput';
import PaymentProviders from './PaymentProviders';
import ProviderItem from './ProviderItem';
import QrcodeContainer from './QrcodeContainer';
import { PROVIDER_REDUCER_ACTIONS, PROVIDER_VAL } from '../utils/constants';
import { API } from '../api';
import toast from 'react-hot-toast';
import Skeleton from 'react-loading-skeleton';

/* eslint-disable react/prop-types */
const PaymentContainer = ({ className }) => {
  const { reset, ...phoneNumber } = usePhone('tel');
  const {
    state: { providerSelected, purchaseData, providersList },
    dispatch,
  } = usePaymentProvider();

  const handlePayment = () => {
    console.log('payment value', phoneNumber.value.split(' ').join(''));
    reset();
  };

  const providerListData = useMemo(() => {
    return providersList
      .map((provider) => ({
        name: provider?.description,
        type: provider?.name,
        imgSrc: provider?.photo,
      }))
      .reverse();
  }, [providersList]);

  const providerPlaceholder = useMemo(() => {
    switch (providerSelected?.type) {
      case 'orange_ci':
        return 'Numéro Orange Money';
      case 'mtn_ci':
        return 'Numéro MTN Money';
      case 'moov_ci':
        return 'Numéro Moov Money';
      default:
        return '';
    }
  }, [providerSelected]);

  const fetchProvidersList = useCallback(async () => {
    try {
      const res = await API.getProvidersList();
      dispatch({
        type: PROVIDER_REDUCER_ACTIONS.addProvidersList,
        payload: res,
      });
    } catch (error) {
      toast.error(error?.message);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchProvidersList();

    return () => {
      toast.dismiss();
    };
  }, [fetchProvidersList]);

  return (
    <div className={className}>
      <div className='title-container'>
        <h3 className='text'>Mobile Money</h3>
        <div className='empty-container'></div>
      </div>
      <PaymentProviders>
        {providerListData.map(
          (provider) =>
            (
              <ProviderItem
                key={provider.type}
                {...provider}
                handleSelectProvider={(type) => {
                  dispatch({
                    type: PROVIDER_REDUCER_ACTIONS.addProviderSelected,
                    payload: providerListData.find(
                      (provider) => provider.type === type
                    ),
                  });
                  reset();
                }}
              />
            ) || (
              <Skeleton key={provider.type} count={providerListData.length} />
            )
        )}
      </PaymentProviders>
      {providerSelected?.name === PROVIDER_VAL ? (
        <QrcodeContainer />
      ) : (
        <>
          <div className='payment-input'>
            <PaymentInput
              placeholder={providerPlaceholder}
              phoneNumber={phoneNumber}
            />
          </div>
          <div className='payment-btn'>
            <PaymentBtn
              amount={purchaseData?.amount}
              handlePayment={handlePayment}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default PaymentContainer;
