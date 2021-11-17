import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faUsers } from "@fortawesome/free-solid-svg-icons";

const Descripcion = () => {
    return (
        <div className="raices">
            <h1 className="py-5">Raíces</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
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