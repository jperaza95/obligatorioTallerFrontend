import logo from './logo.svg';
import "./bootstrap.min.css"
import Login from './components/Login';
import './App.css';
import Registro from './components/Registro';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Dashboard from './components/Dashboard';
import AgregarGasto from './components/AgregarGasto'
import Movimientos from './components/Movimientos';
import MontosTotales from './components/MontosTotales';
import Analisis from './components/Analisis';
import AgregarIngreso from './components/AgregarIngreso';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <Provider store={store}>
      <BrowserRouter>
        <Routes>

          <Route path='/login' element={<Login />} />
          <Route path='registro' element={<Registro />} />

          <Route path='/' element={<Dashboard />}>
            <Route path='agregargasto' element={<AgregarGasto />} />
            <Route path='agregaringreso' element={<AgregarIngreso />} />
            <Route path='movimientos' element={<Movimientos />} />
            <Route path='totales' element={<MontosTotales />} />
            <Route path='analisis' element={<Analisis />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
