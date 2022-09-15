import React from 'react';
import ReactDOM from 'react-dom/client';
// import { CounterWithCustomHook } from './01-useState/02-CounterWithCustomHook';
// import { CounterApp } from './01-useState/01-CounterApp';
// import { HooksApp } from './HooksApp';
import { SimpleForm } from './02-useEffect/01-SimpleForm';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <SimpleForm />
  // </React.StrictMode>
);
