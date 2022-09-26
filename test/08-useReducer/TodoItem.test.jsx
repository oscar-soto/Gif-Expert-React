import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/components/TodoItem';

describe('Pruebas en <TodoItem />', () => {
  const TODO = {
    id: 1,
    description: 'Piedra del alma',
    done: false,
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('Debe de mostrar el TODO pendiente de completar', () => {
    render(
      <TodoItem
        todo={TODO}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const liElement = screen.getByRole('listitem');
    expect(liElement.className).toBe(
      'list-group-item d-flex justify-content-between'
    );

    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toContain('align-self-center');
    expect(spanElement.className).not.toContain('text-decoration-line-through');

    // screen.debug()
  });

  test('Debe de mostrar el TODO completado', () => {
    TODO.done = true;

    render(
      <TodoItem
        todo={TODO}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toContain('text-decoration-line-through');
  });

  test('span debe de llamar al ToogleTodo cuando se hace click', () => {
    render(
      <TodoItem
        todo={TODO}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const spanElement = screen.getByLabelText('span');
    fireEvent.click(spanElement)

    expect( onToggleTodoMock ).toHaveBeenCalledWith( TODO.id );
  });

  test('span debe de llamar de llamar el onDeleteTodo cuando se hace click', () => {
    render(
      <TodoItem
        todo={TODO}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement)

    expect( onDeleteTodoMock ).toHaveBeenCalledWith( TODO.id );
  });
});
