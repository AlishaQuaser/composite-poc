export interface Contact {
  id: string;
  name: string;
  email: string;
}

export interface ContactState {
  contacts: Contact[];
}

export type ContactAction =
  | { type: 'ADD_CONTACT'; payload: Contact }
  | { type: 'UPDATE_CONTACT'; payload: Contact }
  | { type: 'DELETE_CONTACT'; payload: string }; // id

export interface ContactContextType {
  state: ContactState;
  dispatch: React.Dispatch<ContactAction>;
}
