/* eslint-disable react/prop-types */
const PaymentInput = ({ placeholder, phoneNumber }) => {
  return <input {...phoneNumber} placeholder={placeholder} />;
};

export default PaymentInput;
