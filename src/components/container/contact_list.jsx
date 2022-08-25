import React from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from './../../models/levels.enum';
import ContactComponent from './../pure/forms/contact';
import { Contact } from '../../models/contact.class';

const ContactListComponent = () => {
  const defaultContact = new Contact('Jesus', 'Cotito', 'jesus@gmail.com', false);

  return (
    <div>
      <div>
        Your Contacts:
      </div>
      <ContactComponent contact={defaultContact}></ContactComponent>
    </div>
  );
};


ContactListComponent.propTypes = {

};


export default ContactListComponent;
