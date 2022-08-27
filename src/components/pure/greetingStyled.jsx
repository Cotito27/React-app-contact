import React, { useState } from 'react';

const loggedStyle = {
  color: 'blue'
};

const unloggedStyle = {
  color: 'tomato',
  fontWeight: 'bold',
};



const GreetingStyled = (props) => {
  const [logged, setLogged] = useState(false);

  const handleLogged = () => setLogged(!logged);

  return (
    <div style={logged ? loggedStyle : unloggedStyle}>
      {
        logged ? <p>Hola, {props.name}</p>
        : <p>Please Login</p>
      }
      <button onClick={handleLogged}>
        { logged ? 'Logout' : 'Login' }
      </button>
    </div>
  );
}

export default GreetingStyled;
