import React from 'react';
import {Link} from "react-router-dom";
import '../../styles/Reglas.css'
import ReglasImg from "../../images/reglas.png"

const Reglas = () => {
    return (
        <div style={{ backgroundColor: 'rgb(177, 253, 253)', height: '120vh' }}>
            <div className="reglas-container">
                <div className="row">
                    <div className="reglas col-md-12 col-sm-12">
                        <div className="titulo-reglas">
                            <p className="reglas-juego">Reglas</p>
                        </div>
                        <div className="reglas">
                            <img src={ReglasImg} className="img-fluid" alt="Responsive image"></img>
                        </div>
                        <div className="home">
                            <Link to={'/'}>
                                <button className="btn btn-dark">Home</button>
                            </Link>
                        </div>
                    </div>  
                </div> 
            </div> 
        </div>
    )
}

export default Reglas ;