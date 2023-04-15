import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Field from './components/form/field/Field';

function App() {
  const loggerMethod = (value:string,name:string) => {
    console.log(`[${name}:${value}]`);
  };

  return (
    <div className='App'>
     <Field
        loggerMethod={loggerMethod}
        type="text"
        name="name"
        placeholder='Ingresa tu nombre'/>
      <Field
        loggerMethod={loggerMethod}
        type="email"
        name="email"
        placeholder='Ingresa tu correo'/>
      <Field
        loggerMethod={loggerMethod}
        type="password"
        name="password"
        placeholder='Ingresa tu contraseña'/>
    </div>
    
  );
}

export default App