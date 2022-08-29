import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from './../../models/levels.enum';
import ContactComponent from '../pure/contact';
import { Contact } from '../../models/contact.class';
import clsx from 'clsx';
import useClasses from './../../hooks/useClasses';
import ContactForm from './../pure/forms/contactForm';
import '../../styles/contact.scss';

const ContactListComponent = () => {
  const classes = useClasses({
    cardBody: {
      position: 'relative',
      height: '400px'
    }
  });

  const defaultContact1 = new Contact('Jesus', 'Cotito', 'jesus@gmail.com', false);
  const defaultContact2 = new Contact('Diego', 'Cervantes', 'diego@gmail.com', false);
  const defaultContact3 = new Contact('Fernando', 'Sanchez', 'fernando@gmail.com', false);
  const [contacts, setContacts] = useState([defaultContact1, defaultContact2, defaultContact3]);

  function connectContact(contact) {
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts[index].connected = !tempContacts[index].connected;
    setContacts(tempContacts);
  }

  function deleteContact(contact) {
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts.splice(index, 1);
    setContacts(tempContacts);
  }

  function addContact(contact) {
    const tempContacts = [...contacts, contact];
    setContacts(tempContacts);
  }

  return (
    <div>
      <div className='col-12'>
        <div className='card'>
          <div className="card-header p-3">
            <h5 className='text-center'>Your Contacts:</h5>
          </div>
          <div className={clsx('card-body', classes.cardBody)} data-mdb-perfect-scrollbar='true'>
            <table className='table table-striped'>
              <thead>
                <tr>
                  <th scope='col'>Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Priority</th>
                  <th scope='col'>Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
              {contacts.map((contact, index) => <ContactComponent key={index} contact={contact} connect={connectContact} remove={deleteContact} />)}
              </tbody>
            </table>
          </div>
          <ContactForm add={addContact} />
        </div>
      </div>
    </div>
  );
};


ContactListComponent.propTypes = {

};


export default ContactListComponent;
