import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Usuario from './usuario'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Usuario/>
  </React.StrictMode>,
)
