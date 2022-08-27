import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Contact } from './../../../models/contact.class';


const ContactComponent = ({ contact }) => {
  const [connected, setConnected] = useState(contact.connected);
  const handleConnect = () => {
    setConnected(!connected);
  }
  return (
    <div>
      <h2>
        Nombre: {contact.name}
      </h2>
      <h3>
        Apellido: {contact.surname}
      </h3>
      <h4>
        Email: {contact.email}
      </h4>
      <h5>
        Conectado: {connected ? 'Contacto En Línea' : 'Contacto No Disponible'}
      </h5>
      <button onClick={handleConnect}>
        {connected ? 'Desconectarse' : 'Conectarse'}
      </button>
    </div>
  );
};


ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
