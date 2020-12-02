import React from 'react';
import {Link} from "react-router-dom";
import Piedra from "../../images/piedra.svg"
import Papel from "../../images/papel.svg"
import Tijera from "../../images/tijera.svg"
import Lagarto from "../../images/lagarto.svg"
import Spock from "../../images/spock.svg"
import '../../styles/Home.css'


const Home = () => {
    
    return(
        <div style={{ backgroundColor: 'rgba(241, 217, 161, 0.952)', height: '120vh' }}>
            <div className="Home">
                <div className="home-container-fluid">
                    <div className="row">
                        <div className="home col-md-12 col-sm-12">         
                            <div className="titulo">          
                                <p className="titulo-juego">Piedra, Papel, Tijera, Lagarto, Spock </p>
                            </div>
                            <div className="opciones">
                                <img src={Piedra} className="piedra"></img> 
                                <img src={Papel} className="papel"></img> 
                                <img src={Tijera} className="tijera"></img> 
                                <img src={Lagarto} className="lagarto"></img> 
                                <img src={Spock} className="spock"></img> 
                            </div>
                            <div className="un-jugador">
                                <Link to={'/jugador1'}>
                                    <button className="btn btn-info">1 Jugador</button>
                                </Link>
                            </div>

                            <div className="dos-jugadores">
                                <Link to={'/jugador2'}>
                                    <button className="btn btn-info">2 Jugador</button>
                                </Link>
                            </div>
                                
                            <div className="reglas">
                                <Link to={'/reglas'}>
                                    <button className="btn btn-info">Reglas</button>
                                </Link>
                            </div>             
                        </div>
                    </div>      
                </div>
            </div>
        </div>
    )
}


export default Home ;