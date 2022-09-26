import React from 'react'; //estos de importan desde node-modules
import ReactDOM from 'react-dom/client'; //estos de importan desde node-modules
import './index.css'; //no lleva nombre porque es un archivo de estilos
import App from './App'; //importacion dentro de la carpeta src

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

