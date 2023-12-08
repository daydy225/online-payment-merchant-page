import { HiLockClosed } from 'react-icons/hi2';

const PaymentContentPolicy = () => {
  return (
    <div className='payment-policy'>
      <span className='policy-icon--container'>
        <HiLockClosed size={25} color='#4caf50' />
      </span>
      <p className='policy-text'>
        Nous ne stockons pas vos données de paiement, mais les transférons
        immédiatement via un canal crypté au système de paiement
      </p>
    </div>
  );
};

export default PaymentContentPolicy;
