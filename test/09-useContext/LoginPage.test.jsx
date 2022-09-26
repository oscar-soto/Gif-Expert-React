import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContex';
import { LoginPage } from '../../src/09-useContext/LoginPage';

describe('Preuba en <LoginPage />', () => {
  test('Debe de mostrar el componente sin el usuario', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre'); // Aria lable
    expect(preTag.innerHTML).toBe('null');
  });

  test('Debe de llamar al setUser cuando se hace click en el boton', () => {
    const setUserMock = jest.fn();
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);

    expect(setUserMock).toHaveBeenCalledWith({
      email: 'oscar@oscar.com',
      id: 123,
      name: 'Oscar Espinoza',
    });
  });
});
