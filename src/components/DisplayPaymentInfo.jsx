import { usePaymentProvider } from '../hook';

/* eslint-disable react/prop-types */
const DisplayPaymentInfo = () => {
  const {
    state: { purchaseData },
  } = usePaymentProvider();
  return (
    <div className='online-payement-details'>
      <h2 className='amount'>{`${purchaseData?.amount} F CFA`}</h2>
      <p className='payment-info'>{purchaseData?.product}</p>
    </div>
  );
};

export default DisplayPaymentInfo;
