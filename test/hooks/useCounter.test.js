import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('Prubas en el useCounter', () => {
  test('Debe de retornar los valores por defecto', () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrement, increment, reset } = result.current;

    expect(counter).toBe(10); // si cambia el numero por default da error
    expect(decrement).toEqual(expect.any(Function)); // Se espera que sea una funcion
    expect(increment).toEqual(expect.any(Function)); // Se espera que sea una funcion
    expect(reset).toEqual(expect.any(Function)); // Se espera que sea una funcion
  });

  test('Debe de generar el counter con el valor de 100', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test('Debe de incrementar el contador', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, increment } = result.current;

    act(() => {
      increment();
      increment(2);
    })
    expect(result.current.counter).toBe(103)
  });

  test('Debe de decrementar el contador', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, decrement } = result.current;

    act(() => {
      decrement();
      decrement(2);
    })
    expect(result.current.counter).toBe(97)
  });

  test('Debe de reset el contador', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, reset, increment } = result.current;

    act(() => {
      increment();
      increment(2);
      reset();
    })
    expect(result.current.counter).toBe(100)
  });
});
