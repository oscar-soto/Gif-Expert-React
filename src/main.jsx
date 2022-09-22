import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// import { CounterWithCustomHook } from './01-useState/02-CounterWithCustomHook';
// import { CounterApp } from './01-useState/01-CounterApp';
// import { HooksApp } from './HooksApp';
// import { SimpleForm } from './02-useEffect/01-SimpleForm';
// import { FormWithCustomHook } from './02-useEffect/03-FormWithCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Layout } from './05-useLayoutEffec/Layout';
// import { Memorize } from './06-memos/Memorize';
// import { MemorizeHook } from './06-memos/02-MemorizeHook';
// import { CallbackHook } from './06-memos/03-CallbackHook';
// import { Padre } from './07-tarea-memo/Padre';
// import './08-useReducer/intro-reducer'
// import { TodoApp } from './08-useReducer/TodoApp';
import { MainApp } from './09-useContext/MainApp';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <MainApp />
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
