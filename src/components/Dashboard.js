import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Descripcion from './Descripcion';
import { Patrocinadores } from './Patrocinadores';

export default function Dashboard() {
  return (
    <>
    <Navbar/>
    <Descripcion />
    <Patrocinadores />
    </>
  );
}