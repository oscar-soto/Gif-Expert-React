import React from 'react';
import ReactDOM from 'react-dom/client';
// import { CounterWithCustomHook } from './01-useState/02-CounterWithCustomHook';
// import { CounterApp } from './01-useState/01-CounterApp';
// import { HooksApp } from './HooksApp';
// import { SimpleForm } from './02-useEffect/01-SimpleForm';
// import { FormWithCustomHook } from './02-useEffect/03-FormWithCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Layout } from './05-useLayoutEffec/Layout';
// import { Memorize } from './06-memos/Memorize';
import { MemorizeHook } from './06-memos/MemorizeHook';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <MemorizeHook />
  // </React.StrictMode>
);
