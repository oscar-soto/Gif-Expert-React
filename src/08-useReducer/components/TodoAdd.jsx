import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useForm({
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que no este vacio
    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime() + 2,
      description,
      done: false,
    };

    onNewTodo(newTodo);

    onResetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Que hay que hacer?"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />

      <button type="submit" className="btn btn-outline-primary mt-1">
        Agregar
      </button>
    </form>
  );
};
