import Logo from '../components/Logo';
import { CgDanger } from 'react-icons/cg';
import { LOGO_VALSORIA } from '../utils/constants';

const NotFound = () => {
  return (
    <main className='online--payment-container' style={{}}>
      <div className='online-payment--header'>
        <Logo src={LOGO_VALSORIA} alt='logo' className='online-payment-logo' />
        <div className='page-not-found-title'>
          <h1>404</h1>
          <h2>Page non trouvée !!</h2>
        </div>
      </div>
      <div className='online--payment-body' style={{ height: 'fit-content' }}>
        <div className='alert-info_container'>
          <CgDanger size={30} color='#f44336' />
          <p>
            La page que vous recherchez n&apos;existe pas ou a été déplacée.
          </p>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
