import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PatientsProvider from './context/PatientsProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PatientsProvider>
      <App />
    </PatientsProvider>
  </React.StrictMode>
);
