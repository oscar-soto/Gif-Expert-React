import { useEffect } from 'react';
import { useState } from 'react';
import { Message } from './02-Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'oscar',
    email: 'oscar@google.com',
  });

  const { username, email } = formState;

  const inputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log('useEffect Called!');
  }, []);

  useEffect(() => {
    // console.log('formState Called!');
  }, [formState]);

  useEffect(() => {
    // console.log('email Called!');
  }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={inputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="oscar@google.com"
        name="email"
        value={email}
        onChange={inputChange}
      />

      {
        username === 'oscar2' && <Message />
      }
    </>
  );
};
