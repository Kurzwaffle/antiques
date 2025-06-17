import { createContext, useContext, useState, ReactNode } from 'react';
import { Currency, ExchangeRates } from '../types';

// Exchange rates (in real app, these would come from an API)
const EXCHANGE_RATES: ExchangeRates = {
  USD: 1,
  EUR: 0.93,
  GBP: 0.79
};

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (price: number) => string;
  convertPrice: (price: number) => number;
  exchangeRates: ExchangeRates;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>('USD');

  const convertPrice = (price: number): number => {
    return price * EXCHANGE_RATES[currency];
  };

  const formatPrice = (price: number): string => {
    const convertedPrice = convertPrice(price);
    
    switch (currency) {
      case 'USD':
        return `$${convertedPrice.toFixed(2)}`;
      case 'EUR':
        return `€${convertedPrice.toFixed(2)}`;
      case 'GBP':
        return `£${convertedPrice.toFixed(2)}`;
      default:
        return `$${convertedPrice.toFixed(2)}`;
    }
  };

  return (
    <CurrencyContext.Provider value={{ 
      currency, 
      setCurrency, 
      formatPrice, 
      convertPrice, 
      exchangeRates: EXCHANGE_RATES 
    }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = (): CurrencyContextType => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};