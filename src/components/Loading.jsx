import SpinnerImg from '../../src/assets/spinner-2.gif';

const Loading = () => {
  return (
    <div className='loader'>
      <div
        style={{
          width: 75,
          height: 75,
          borderRadius: 75,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '',
        }}
      >
        <img src={SpinnerImg} alt='spinner' style={{ width: 60, height: 60 }} />
      </div>
    </div>
  );
};

export default Loading;
