import { useRef } from 'react';

export const FocusScreen = () => {
  const inputRef = useRef();
  // console.log(ref)

  const onClickBtn = () => {
    // document.querySelector('input').select();
    inputRef.current.select()
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        placeholder="Escribe tu nombre"
        className="form-control"
      />

      <button className="btn btn-primary mt-4" onClick={onClickBtn}>
        Set Focus
      </button>
    </>
  );
};
