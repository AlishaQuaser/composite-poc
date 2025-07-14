'use client';
import React from 'react';
import { useContacts } from './useContacts';
import ContactCard from './ContactCard';

const ContactList = () => {
  const { state } = useContacts();

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold mb-2">Contact List</h2>
      {state.contacts.length === 0 ? (
        <p className="text-gray-500">No contacts found.</p>
      ) : (
        state.contacts.map(contact => <ContactCard key={contact.id} contact={contact} />)
      )}
    </div>
  );
};

export default ContactList;
