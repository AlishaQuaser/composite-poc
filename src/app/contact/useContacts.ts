import { useContext } from 'react';
import { ContactContext } from './ContactProvider';

export const useContacts = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error('useContacts must be used within ContactProvider');
  }
  return context;
};
