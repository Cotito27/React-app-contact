import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Contact } from './../../models/contact.class';
import useClasses from './../../hooks/useClasses';
import clsx from 'clsx';

const ContactComponent = ({ contact, connect, remove }) => {
  const classes = useClasses({
    iconToggleOn: {
      color: 'green',
    },
    iconToggleOff: {
      color: 'grey'
    },
    iconTrash: {
      color: 'tomato',
    }
  });

  function ContactConnectedBadge() {
    if(contact.connected) {
      return <h6 className='mb-0'>
      <span className='badge bg-success'>
        Connected
      </span>
    </h6>;
    } else {
      return <h6 className='mb-0'>
      <span className='badge bg-danger'>
        Disconnected
      </span>
    </h6>;
    }
  }

  function ContactIconConnected() {
    if(contact.connected) {
      return <i onClick={() => connect(contact)} className={clsx("bi-toggle-on", classes.iconToggleOn, 'contact-action')}></i>;
    } else {
      return <i onClick={() => connect(contact)} className={clsx("bi-toggle-off", classes.iconToggleOff, 'contact-action')}></i>;
    }
  }

  return (
    <tr className='fw-normal'>
      <th>
        <span>{contact.name}</span>
      </th>
      <td className='align-middle'>
        <span>{contact.surname}</span>
      </td>
      <td className='align-middle'>
        <span>{contact.email}</span>
      </td>
      <td>
        <span>
          <ContactConnectedBadge/>
        </span>
      </td>
      <td className='align-middle'>
        <span>
          <ContactIconConnected/>
        </span>
        <i onClick={() => remove(contact)} className={clsx("bi-trash", classes.iconTrash, 'contact-action')}></i>
      </td>
    </tr>
  );
};


ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact).isRequired,
  connect: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
};


export default ContactComponent;
