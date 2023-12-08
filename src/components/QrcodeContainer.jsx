import QRCode from 'react-qr-code';

const QrcodeContainer = () => {
  return (
    <div className='payment-qrcode-container'>
      <QRCode
        size={256}
        style={{
          display: 'block',
          width: '40%',
          margin: 'auto',
          height: '40%',
          padding: '1rem',
          borderRadius: '0.5rem',
          border: '3px solid #e5e5e5',
        }}
        value={'https://valsoria.com'}
        viewBox={`0 0 256 256`}
      />
      <p className='text'>
        Veuillez scanner le QR code depuis votre application mobile Valsoria
        pour effectuer le paiement.
      </p>
    </div>
  );
};

export default QrcodeContainer;
