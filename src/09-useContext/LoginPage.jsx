import { useContext } from 'react';
import { UserContext } from './context/UserContex';

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre aria-label="pre">{JSON.stringify(user, null, 2)}</pre>

      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({ id: 123, name: 'Oscar Espinoza', email: 'oscar@oscar.com' })
        }
      >
        Establecer usuario
      </button>
    </>
  );
};
