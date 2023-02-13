import logo from './logo.svg';
import "./bootstrap.min.css"
import Login from './components/Login';
import './App.css';
import Registro from './components/Registro';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Dashboard from './components/Dashboard';

function App() {
  return (
    //<Provider store={store}>
      <Registro />
      // {/* <Login /> */}
      // {/* <Dashboard /> */}
    //</Provider>
  );
}

export default App;
