import React, { useRef } from 'react';
import { Contact } from '../../../models/contact.class';
import PropTypes from 'prop-types';

const ContactForm = ({add}) => {
  const nameRef = useRef('');
  const surnameRef = useRef('');
  const emailRef = useRef('');

  function addContact(e) {
    e.preventDefault();
    const newContact = new Contact(
      nameRef.current.value,
      surnameRef.current.value,
      emailRef.current.value,
      false
    );
    add(newContact);
  }

  return (
    <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mb-4 p-3'>
      <div className="form-outline flex-fill">
        <label htmlFor="inputName">Name</label>
        <input ref={nameRef} type="text" id='inputName' className='form-control form-control-lg' required autoFocus />
        <label htmlFor="inputSurname">Surname</label>
        <input ref={surnameRef} type="text" id='inputSurname' className='form-control form-control-lg' required />
        <label htmlFor="inputEmail">Email</label>
        <input ref={emailRef} type="text" id='inputEmail' className='form-control form-control-lg' required />
        <button type='submit' className='btn btn-primary mt-3'>Agregar</button>
      </div>
    </form>
  );
}

ContactForm.propTypes = {
  add: PropTypes.func.isRequired
}

export default ContactForm;
