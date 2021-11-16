import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppStoreIos } from "@fortawesome/free-brands-svg-icons";
import { faAward, faChalkboardTeacher, faUniversity, faUsers } from "@fortawesome/free-solid-svg-icons";

const Descripcion = () => {
    return (
        <div className="services">
            <h1 className="py-5">My Services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div class="circle"><FontAwesomeIcon  className="icon" icon={faChalkboardTeacher} size="2x" /></div>
                                <h3>AIAS</h3>
                                <p>El American Institute of Architecture Students 
                                    (AIAS) es una organización independiente 
                                    dirigida por estudiantes que ofrece programas, 
                                    información y recursos sobre temas críticos para 
                                    la arquitectura y la experiencia de la educación. 
.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div class="circle"><FontAwesomeIcon className="icon" icon={faUniversity} size="2x" /></div>
                                <h3>SAARQ</h3>
                                <p>La gestión 2021-2022 de la Sociedad de Alumnos 
                                    de Arquitectura de la Universidad de Monterrey,
                                    busca representar y dar voz a más de 700 
                                    estudiantes de la carrera dentro de la 
                                    Universidad.
</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div class="circle"><FontAwesomeIcon className="icon" icon={faAward} size="2x" /></div>
                                <h3>HUMARQ</h3>
                                <p>Un evento de alto prestigio dirigido específicamente 
                                    a la comunidad estudiantil de la carrera de arquitectura, 
                                    donde se imparten una serie de conferencias por arquitectos 
                                    de alta gama reconocidos a nivel nacional. 
                                </p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div class="circle"><FontAwesomeIcon className="icon" icon={faUsers} size="2x" /></div>
                                <h3>Raíces</h3>
                                <p>Humarq busca que año con año en sus diferentes 
                                    ediciones se establezca un tema en específico de 
                                    interés para los estudiantes de arquitectura. 
                                    La primera edición se titula Raíces, donde el 
                                    objetivo es reconocer la trayectoria de los arquitectos 
                                    que hacen distinguir la arquitectura mexicana alrededor 
                                    del mundo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Descripcion;