import './App.css';
import { BrowserRouter as Router,Route}from 'react-router-dom';
import BarraNav from './components/BarraNav';
import { Registro } from './components/Registro';


function App() {
  return (
    <Router>
    <BarraNav/>
      <Route path='/registroProfesor' exact component={Registro}/>
    </Router>
  );
}

export default App;
