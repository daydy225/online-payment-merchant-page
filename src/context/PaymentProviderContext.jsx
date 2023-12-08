/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react';
import { initFirstProvider } from '../assets/static/statcs.data';
import { PROVIDER_REDUCER_ACTIONS } from '../utils/constants';

const PaymentProviderContext = createContext(null);

const initialState = {
  providersList: [],
  purchaseData: null,
  providerSelected: initFirstProvider,
};

const paymentProviderReducer = (state, action) => {
  switch (action.type) {
    case PROVIDER_REDUCER_ACTIONS.addProvidersList:
      return {
        ...state,
        providersList: action.payload,
      };
    case PROVIDER_REDUCER_ACTIONS.addPurchaseData:
      return {
        ...state,
        purchaseData: action.payload,
      };
    case PROVIDER_REDUCER_ACTIONS.addProviderSelected:
      return {
        ...state,
        providerSelected: action.payload,
      };

    case PROVIDER_REDUCER_ACTIONS.resetState:
      return {
        ...state,
        purchaseData: null,
        providerSelected: initFirstProvider,
        token: null,
      };

    default:
      return state;
  }
};

const PaymentProviderContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(paymentProviderReducer, initialState);

  return (
    <PaymentProviderContext.Provider value={{ state, dispatch }}>
      {children}
    </PaymentProviderContext.Provider>
  );
};

export { PaymentProviderContext, PaymentProviderContextProvider };
