'use client';
import React, { createContext, useReducer } from 'react';
import { ContactContextType, ContactState } from './types';
import { contactReducer } from './reducer';

const initialState: ContactState = {
  contacts: [],
};

export const ContactContext = createContext<ContactContextType | undefined>(undefined);

export const ContactProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(contactReducer, initialState);

  return (
    <ContactContext.Provider value={{ state, dispatch }}>
      {children}
    </ContactContext.Provider>
  );
};
