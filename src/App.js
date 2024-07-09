import Router from './components/Router';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';

function App() {
  return (
      <>
          <div className={'container-fluid'}>
              <Router />
          </div>
      </>
  );
}

export default App;
