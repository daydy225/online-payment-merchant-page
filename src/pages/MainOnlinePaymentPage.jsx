import Logo from '../components/Logo';
import DisplayPaymentInfo from '../components/DisplayPaymentInfo';
import PaymentContentPolicy from '../components/PaymentContentPolicy';
import PaymentContainer from '../components/PaymentContainer';
import { LOGO_VALSORIA } from '../utils/constants';

const MainOnlinePaymentPage = () => {
  return (
    <main className='online--payment-container'>
      <div className='online-payment--header'>
        <Logo src={LOGO_VALSORIA} alt='logo' className='online-payment-logo' />
        <DisplayPaymentInfo />
      </div>
      <div className='online--payment-body'>
        <PaymentContentPolicy />
        <PaymentContainer className='payment-container' />
      </div>
    </main>
  );
};

export default MainOnlinePaymentPage;
