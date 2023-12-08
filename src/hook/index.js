import { useState } from 'react';
import { useContext } from 'react';
import { PaymentProviderContext } from '../context/PaymentProviderContext';
export const usePhone = (type) => {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    const inputValue = event.target.value;
    const formattedValue = inputValue
      .replace(/\D/g, '')
      .substring(0, 10)
      .replace(/(\d{2})(?=\d)/g, '$1 ');
    setValue(formattedValue);
  };

  const reset = () => {
    setValue('');
  };

  return {
    type,
    value,
    onChange,
    reset,
  };
};

export const usePaymentProvider = () => {
  const context = useContext(PaymentProviderContext);
  if (context === undefined) {
    throw new Error(
      'usePaymentProviderContext must be used within a PaymentProviderContextProvider'
    );
  }
  return context;
};
