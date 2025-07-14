import { ContactAction, ContactState } from './types';

export const contactReducer = (state: ContactState, action: ContactAction): ContactState => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return { ...state, contacts: [...state.contacts, action.payload] };

    case 'UPDATE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };

    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload),
      };

    default:
      return state;
  }
};
