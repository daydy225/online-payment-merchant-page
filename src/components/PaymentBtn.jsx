/* eslint-disable react/prop-types */
const PaymentBtn = ({ amount, handlePayment }) => {
  return (
    <button
      type='button'
      onClick={handlePayment}
    >{`Payer (${amount} FCFA)`}</button>
  );
};

export default PaymentBtn;
