import React from 'react';
import {Link} from "react-router-dom";
import '../../styles/Home.css'

const Home = () => {
    return(
        <div className="Home">
            <div className="home-container-fluid">
                <div className="row">
                    <div className="home col-md-12 col-sm-12">     
                        <div>          
                            <p className="titulo-juego">Piedra, Papel, Tijera, Lagarto, Spock </p>
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
    )
}


export default Home ;