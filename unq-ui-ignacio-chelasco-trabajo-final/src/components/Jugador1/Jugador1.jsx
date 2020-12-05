import React , {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Piedra from "../../images/piedra.svg"
import Papel from "../../images/papel.svg"
import Tijera from "../../images/tijera.svg"
import Lagarto from "../../images/lagarto.svg"
import Spock from "../../images/spock.svg"
import '../../styles/Jugador1.css'

const Jugador1 = () => {
    const [eleccionJugador, setEleccionJugador] = useState("") ;
    const [puntosJugador, setPuntosJugador] = useState(0) ;

    const [eleccionComputadora, setEleccionComputadora] = useState("") ;
    const [puntosComputadora, setPuntosComputadora] = useState(0) ;

    const [resultado, setResultado] = useState("") ;

    const eleccionesPosiblesDeComputadora = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];

    const randomNumber = Math.floor(Math.random() * eleccionesPosiblesDeComputadora.length);
    
    const eleccionRandomComputadora = eleccionesPosiblesDeComputadora[randomNumber];
    


    function evaluarEleccion(eleccionJugador,eleccionComputadora){
        //Piedra
         if(( eleccionJugador === "Piedra") && ((eleccionComputadora === "Tijera") || (eleccionComputadora === "Lagarto"))){
            setPuntosJugador(puntosJugador + 1);
            setResultado("Ganaste");
         }
 
         if(eleccionJugador === eleccionComputadora){
            setResultado("Empate");
         }
 
         if(( eleccionJugador === "Piedra") && ((eleccionComputadora ==="Papel") || (eleccionComputadora === "Spock"))){
            setPuntosComputadora(puntosComputadora + 1);
            setResultado("Perdiste");
         }
 
         //Papel
 
         if((eleccionJugador === "Papel") && ((eleccionComputadora === "Piedra") || (eleccionComputadora === "Spock"))){
            setPuntosJugador(puntosJugador + 1);
            setResultado("Ganaste");
         }
 
         if((eleccionJugador === "Papel") && ((eleccionComputadora === "Tijera") || (eleccionComputadora === "Lagarto"))){
            setPuntosComputadora(puntosComputadora + 1);
            setResultado("Perdiste");
         }
 
         //Tijera
         
         if((eleccionJugador === "Tijera") && ((eleccionComputadora === "Papel") || (eleccionComputadora === "Lagarto"))){
            setPuntosJugador(puntosJugador + 1);
            setResultado("Ganaste");
         }
 
         if((eleccionJugador === "Tijera") && ((eleccionComputadora === "Piedra") || (eleccionComputadora === "Spock"))){
            setPuntosComputadora(puntosComputadora + 1);
            setResultado("Perdiste");
         }
 
         //Lagarto
 
         if((eleccionJugador === "Lagarto") && ((eleccionComputadora === "Papel") || (eleccionComputadora === "Spock"))){
            setPuntosJugador(puntosJugador + 1);
            setResultado("Ganaste");
         }
 
         if((eleccionJugador === "Lagarto") && ((eleccionComputadora === "Tijera") || (eleccionComputadora === "Piedra"))){
            setPuntosComputadora(puntosComputadora + 1);
            setResultado("Perdiste");
         }
 
         //Spock
 
         if((eleccionJugador === "Spock") && ((eleccionComputadora === "Tijera") || (eleccionComputadora === "Piedra"))){
            setPuntosJugador(puntosJugador + 1);
            setResultado("Ganaste");
         }
 
         if((eleccionJugador === "Spock") && ((eleccionComputadora === "Lagarto") || (eleccionComputadora === "Papel"))){
            setPuntosComputadora(puntosComputadora + 1);
            setResultado("Perdiste");
         }
    }


    function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
         if ((new Date().getTime() - start) > milliseconds) {
          break;
         }
        }
       }

    function Jugar(eleccionJugador){   
        setEleccionJugador(eleccionJugador);
        setEleccionComputadora(eleccionRandomComputadora);      
        evaluarEleccion(eleccionJugador,eleccionRandomComputadora);  
   }

   function Reiniciar(){
        setEleccionJugador(null);
        setEleccionComputadora(null);
        setResultado(null);
        setPuntosComputadora(0);
        setPuntosJugador(0);
    }

    return (
       <div className="Jugador1">
            <div className="jugador1-container-fluid">
                <div className="row">
                    <div className="jugador1 col-md-3 col-3"> 
                        <button className="botonPiedra" onClick={() => {Jugar("Piedra")}}>
                            <img src={Piedra} className="imgPiedra"/>
                        </button>
                    </div>
                    <div className="jugador1 col-md-2 col-2"> 
                        <p>Puntos Jugador : {puntosJugador}</p>
                        
                    </div>
                    <div className="jugador1 col-md-2 col-2"> 
                        <p className="tituloJugador1">Jugador vs Computadora</p>
                    </div>
                    <div className="jugador1 col-md-2 col-2"> 
                        <p>Puntos Computadora : {puntosComputadora}</p>
                        
                    </div>
                    <div className="jugador1 col-md-3 col-3"> 
                        <button disabled className="botonPiedraPc">
                            <img src={Piedra} className="imgPiedra"/>
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="jugador1 col-md-3 col-3"> 
                        <button className="botonPapel" onClick={() => {Jugar("Papel")}}>
                            <img src={Papel} className="imgPapel"/>
                        </button>   
                    </div>
                    <div className="jugador1 col-md-2 col-2">
                        <p className="eleccionJugador">Eleccion Jugador : {eleccionJugador}</p>
                    </div>
                    <div className="jugador1 col-md-2 col-2"></div>
                    <div className="jugador1 col-md-2 col-2">
                        <p className="eleccionComputadora">Eleccion Computadora : {eleccionComputadora}</p>
                    </div>
                    <div className="jugador1 col-md-3 col-3"> 
                        <button disabled className="botonPapelPc">
                            <img src={Papel} className="imgPapel"/>
                        </button>   
                    </div>
                </div>
                <div className="row">
                    <div className="jugador1 col-md-3 col-3"> 
                        <button className="botonTijera" onClick={() => {Jugar("Tijera")}}>
                            <img src={Tijera} className="imgTijera"/>
                        </button>
                    </div>
                    <div className="jugador1 col-md-2 col-2"></div>
                        
                    <div className="jugador1 col-md-2 col-2">
                        <p className="resultadoPartida">{resultado}</p>
                    </div>    
                    <div className="jugador1 col-md-2 col-2"></div>
                    <div className="jugador1 col-md-3 col-3"> 
                        <button disabled className="botonTijeraPc">
                            <img src={Tijera} className="imgTijera"/>
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="jugador1 col-md-3 col-3"> 
                        <button className="botonLagarto" onClick={() => {Jugar("Lagarto")}}>
                            <img src={Lagarto} className="imgLagarto"/>
                        </button>
                    </div>
                    <div className="jugador1 col-md-2 col-2"></div>
                    <div className="jugador1 col-md-2 col-2">
                        <p>¿ Quieres empezar de 0 ?</p>
                        <button className="btn btn-info" onClick={() => {Reiniciar()}}>Volver a empezar</button> 
                               
                    </div>
                    <div className="jugador1 col-md-2 col-2"></div>
                    <div className="jugador1 col-md-3 col-3"> 
                        <button disabled className="botonLagartoPc">
                            <img src={Lagarto} className="imgLagarto"/>
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="jugador1 col-md-3 col-3"> 
                        <button className="botonSpock" onClick={() => {Jugar("Spock")}}>
                            <img src={Spock} className="imgSpock"/>
                        </button>
                    </div>
                    <div className="jugador1 col-md-2 col-2"></div>
                    <div className="jugador1 col-md-2 col-2">
                        <p>¿ Quieres salir ?</p>
                        <Link to={'/'}>
                            <button className="btn btn-info">Home</button> 
                        </Link>  
                    </div>
                    <div className="jugador1 col-md-2 col-2"></div>
                    <div className="jugador1 col-md-3 col-3"> 
                        <button disabled className="botonSpockPc">
                            <img src={Spock} className="imgSpock"/>
                        </button>
                    </div>
                </div>       
            </div>

        </div>    
    )
}

export default Jugador1 ;