import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Descripcion from './components/Descripcion';
import { Patrocinadores } from './components/Patrocinadores';

function App() {
  return (
    <>
    <Navbar/>
    <Descripcion />
    <Patrocinadores />
    </>
  );
}

export default App;
