import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Toast } from 'primereact/toast';
import Promocion from './Promocion';
import MesaTrabajo from './MesaTrabajo';
import Menu from '../components/Menu';

function App() {
  return (
    <div>
      <Menu />
      <div className='container-fluid'>
        <BrowserRouter>
          <Route exact path='/' component={MesaTrabajo} />
          <Route exact path='/prueba' component={Promocion} />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
