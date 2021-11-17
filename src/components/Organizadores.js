import React from "react";
import Navbar from "./Navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faUsers } from "@fortawesome/free-solid-svg-icons";

const Descripcion = () => {
    return (
        <><div className="organizadores">
            <h1 className="py-5">Organizadores</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <div className="box">
                            <div class="circle"><FontAwesomeIcon className="icon" icon={faAward} size="2x" /></div>
                            <h3>AIAS</h3>
                            <p>El <b>American Institute of Architecture Students (AIAS) </b> 
                                 es una organización independiente dirigida por estudiantes
                                 que ofrece programas, información y recursos sobre temas 
                                 críticos para la arquitectura y la experiencia de la 
                                 educación. 

                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="box">
                            <div class="circle"><FontAwesomeIcon className="icon" icon={faAward} size="2x" /></div>
                            <h3>SAARQ</h3>
                            <p>La gestión 2021-2022 de la Sociedad de Alumnos de Arquitectura 
                                de la Universidad de Monterrey, busca representar y dar voz a más 
                                de 700 estudiantes de la carrera dentro de la Universidad.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div></>
    )
}

export default Descripcion;