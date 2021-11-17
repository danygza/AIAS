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
                        <div className="col-md-4 col-sm-4">
                            <div className="box">
                            <div class="circle"><FontAwesomeIcon className="icon" icon={faAward} size="2x" /></div>
                                <h3>HUMARQ</h3>
                                <p><i>Descripción:</i> Un evento de <b>alto prestigio</b> dirigido específicamente 
                                    a la comunidad estudiantil de la carrera de arquitectura, 
                                    donde se imparten una serie de conferencias por arquitectos 
                                    de <b>alta gama</b> reconocidos a nivel nacional. 
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="box">
                            <div class="circle"><FontAwesomeIcon className="icon" icon={faAward} size="2x" /></div>
                                <h3>HUMARQ</h3>
                                <p><i>Objetivo:</i> El objetivo principal es mejorar la experiencia de 
                                la comunidad estudiantil promoviendo la creatividad e innovación, por 
                                medio de la inspiración a través de conocer la trayectoria de arquitectos
                                 de <b>alta gama</b>. 
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
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