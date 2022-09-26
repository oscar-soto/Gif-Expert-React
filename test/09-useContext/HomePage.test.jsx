import { render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContex';
import { HomePage } from '../../src/09-useContext/HomePage';

describe('Prueba en <HomePage />', () => {
  const user = {
    id: 1,
    name: 'Oscar',
  };

  test('Debe de mostrar el componente sin el usuario', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );
    // screen.debug();

    const preTag = screen.getByLabelText('pre'); // Aria lable
    expect(preTag.innerHTML).toBe('null');
  });

  test('Debe de mostrar el componente con el usuario', () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );
    screen.debug();

    const preTag = screen.getByLabelText('pre'); // Aria lable
    expect(preTag.innerHTML).toContain(user.name);
    expect(preTag.innerHTML).toContain(user.id.toString());
  });
});
