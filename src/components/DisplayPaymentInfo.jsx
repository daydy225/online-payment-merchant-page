/* eslint-disable react/prop-types */
const DisplayPaymentInfo = ({ amount, product }) => {
  return (
    <div className='online-payement-details'>
      <h2 className='amount'>{`${amount} F CFA`}</h2>
      <p className='payment-info'>{product}</p>
    </div>
  );
};

export default DisplayPaymentInfo;
