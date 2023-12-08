import { usePaymentProvider } from '../hook';
import { API_FILE_URL } from '../utils/config';

/* eslint-disable react/prop-types */
const ProviderItem = ({ imgSrc, type, name, handleSelectProvider }) => {
  const {
    state: { providerSelected },
  } = usePaymentProvider();

  return (
    <div
      className='payment-provider'
      style={{
        border: type === providerSelected?.type && '2px solid #202c54',
      }}
      onClick={() => handleSelectProvider(type)}
    >
      <img src={`${API_FILE_URL}${imgSrc}`} alt={type} />
      <p
        style={{
          color: type === providerSelected?.type && '#202c54',
          fontWeight: type === providerSelected?.type && 'bold',
        }}
      >
        {name}
      </p>
    </div>
  );
};

export default ProviderItem;
