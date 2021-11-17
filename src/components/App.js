
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Descripcion from './Descripcion';
import {Patrocinadores} from './Patrocinadores';
import Organizadores from "./Organizadores";
import Raices from "./Raices"

export default function Dashboard() {
  return (
    <>
    <Navbar/>
    <Descripcion />
    <Raices />
    <Patrocinadores />
    <Organizadores />
    </>
  );
}