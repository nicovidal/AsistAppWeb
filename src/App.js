import './App.css';
import { BrowserRouter as Router,Route}from 'react-router-dom';
import BarraNav from './components/BarraNav';
import { Registro } from './components/Registro';
import {Datos} from './components/Datos';
import Login from './components/Login';




function App() {
  return (
    <Router>
    <BarraNav/>
      <Route path='/' exact component={Login}/>
      <Route path='/registroProfesor' exact component={Registro}/>
      <Route path='/datosProfesor' exact component={Datos}/>

      
    </Router>
  );
}

export default App;
