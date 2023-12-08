import DisplayPaymentInfo from '../components/DisplayPaymentInfo';
import Logo from '../components/Logo';
import { FaCheck } from 'react-icons/fa6';
import { usePaymentProvider } from '../hook';
import { LOGO_VALSORIA } from '../utils/constants';

const PayementSuccessPage = () => {
  const {
    state: { purchaseData },
  } = usePaymentProvider();

  return (
    <main className='online--payment-container' style={{}}>
      <div className='online-payment--header'>
        <Logo src={LOGO_VALSORIA} alt='logo' className='online-payment-logo' />
        <DisplayPaymentInfo
          amount={purchaseData?.amount}
          product={purchaseData?.info}
        />
      </div>
      <div className='online--payment-body' style={{ height: 'fit-content' }}>
        <div className='alert-info_container info-sucess'>
          <FaCheck size={30} />
          <p>Votre paiement a été effectué avec succès.</p>
        </div>
      </div>
    </main>
  );
};

export default PayementSuccessPage;
