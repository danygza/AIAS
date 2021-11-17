import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faUsers } from "@fortawesome/free-solid-svg-icons";

const Descripcion = () => {
    return (
        <div className="services">
            <h1 className="py-5">Descripción del Evento</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <div className="box">
                            <div class="circle"><FontAwesomeIcon className="icon" icon={faAward} size="2x" /></div>
                                <h3>Descripción</h3>
                                <p>Un evento de <b>alto prestigio</b> dirigido específicamente 
                                    a la comunidad estudiantil de la carrera de arquitectura, 
                                    donde se imparten una serie de conferencias por arquitectos 
                                    de <b>alta gama</b> reconocidos a nivel nacional. 
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="box">
                            <div class="circle"><FontAwesomeIcon className="icon" icon={faAward} size="2x" /></div>
                                <h3>Objetivo</h3>
                                <p>El objetivo principal es mejorar la experiencia de 
                                la comunidad estudiantil promoviendo la creatividad e innovación, por 
                                medio de la inspiración a través de conocer la trayectoria de arquitectos
                                 de <b>alta gama</b>. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Descripcion;