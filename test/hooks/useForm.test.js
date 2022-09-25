import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';

describe('Pruebas en useForm', () => {
  const initialForm = {
    name: 'Oscar',
    email: 'oscar@oscar.com',
  };

  test('Debe de regresar los valores por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    })
  });

  test('Debe de cambiar el nombre del formulario', () => {  
    const newValue = 'Juan';

    const { result } = renderHook(() => useForm(initialForm));
    const {onInputChange} = result.current

    const target = {
      name: 'name', 
      value: newValue
    }

    act(() => {
      onInputChange({target});
    })

    expect(result.current.name).toEqual(newValue)
    expect(result.current.formState.name).toEqual(newValue)
  })

  test('Debe de realizar el rest del formulario', () => {  
    const newValue = 'Juan';

    const { result } = renderHook(() => useForm(initialForm));
    const {onResetForm, onInputChange} = result.current

    const target = {
      name: 'name', 
      value: newValue
    }

    act(() => {
      onInputChange({target});
      onResetForm();
    })

    expect(result.current.name).toEqual(initialForm.name)
    expect(result.current.formState.name).toEqual(initialForm.name)
  })
});
