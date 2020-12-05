import React , {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Piedra from "../../images/piedra.svg"
import Papel from "../../images/papel.svg"
import Tijera from "../../images/tijera.svg"
import Lagarto from "../../images/lagarto.svg"
import Spock from "../../images/spock.svg"
import '../../styles/Jugador2.css'

const Jugador2 = () => {
    const [eleccionJugador1, setEleccionJugador1] = useState("") ;
    const [puntosJugador1, setPuntosJugador1] = useState(0) ;

    const [eleccionJugador2, setEleccionJugador2] = useState("") ;
    const [puntosJugador2, setPuntosJugador2] = useState(0) ;

    const [resultado, setResultado] = useState("") ;

    
    function evaluarEleccion(eleccionJugador1,eleccionJugador2){
        //Piedra
         if(( eleccionJugador1 === "Piedra") && ((eleccionJugador2 === "Tijera") || (eleccionJugador2 === "Lagarto"))){
            setPuntosJugador1(puntosJugador1 + 1);
            setResultado("Ganador Jugador1");
            setEleccionJugador1("");
            setEleccionJugador2("");
         }
 
         if(eleccionJugador1 === eleccionJugador2){
            setResultado("Empate");
            setEleccionJugador1("");
            setEleccionJugador2("");
         }
 
         if(( eleccionJugador1 === "Piedra") && ((eleccionJugador2 ==="Papel") || (eleccionJugador2 === "Spock"))){
            setPuntosJugador2(puntosJugador2 + 1);
            setResultado("Ganador Jugador2");
            setEleccionJugador1("");
            setEleccionJugador2("");
         }
 
         //Papel
 
         if((eleccionJugador1 === "Papel") && ((eleccionJugador2 === "Piedra") || (eleccionJugador2 === "Spock"))){
            setPuntosJugador1(puntosJugador1 + 1);
            setResultado("Ganador Jugador1");
            setEleccionJugador1("");
            setEleccionJugador2("");
         }
 
         if((eleccionJugador1 === "Papel") && ((eleccionJugador2 === "Tijera") || (eleccionJugador2 === "Lagarto"))){
            setPuntosJugador2(puntosJugador2 + 1);
            setResultado("Ganador Jugador2");
            setEleccionJugador1("");
            setEleccionJugador2("");
         }
 
         //Tijera
         
         if((eleccionJugador1 === "Tijera") && ((eleccionJugador2 === "Papel") || (eleccionJugador2 === "Lagarto"))){
            setPuntosJugador1(puntosJugador1 + 1);
            setResultado("Ganador Jugador1");
            setEleccionJugador1("");
            setEleccionJugador2("");
         }
 
         if((eleccionJugador1 === "Tijera") && ((eleccionJugador2 === "Piedra") || (eleccionJugador2 === "Spock"))){
            setPuntosJugador2(puntosJugador2 + 1);
            setResultado("Ganador Jugador2");
            setEleccionJugador1("");
            setEleccionJugador2("");
         }
 
         //Lagarto
 
         if((eleccionJugador1 === "Lagarto") && ((eleccionJugador2 === "Papel") || (eleccionJugador2 === "Spock"))){
            setPuntosJugador1(puntosJugador1 + 1);
            setResultado("Ganador Jugador1");
            setEleccionJugador1("");
            setEleccionJugador2("");
         }
 
         if((eleccionJugador1 === "Lagarto") && ((eleccionJugador2 === "Tijera") || (eleccionJugador2 === "Piedra"))){
            setPuntosJugador2(puntosJugador2 + 1);
            setResultado("Ganador Jugador2");
            setEleccionJugador1("");
            setEleccionJugador2("");
         }
 
         //Spock
 
         if((eleccionJugador1 === "Spock") && ((eleccionJugador2 === "Tijera") || (eleccionJugador2 === "Piedra"))){
            setPuntosJugador1(puntosJugador1 + 1);
            setResultado("Ganador Jugador1");
            setEleccionJugador1("");
            setEleccionJugador2("");

         }
 
         if((eleccionJugador1 === "Spock") && ((eleccionJugador2 === "Lagarto") || (eleccionJugador2 === "Papel"))){
            setPuntosJugador2(puntosJugador2 + 1);
            setResultado("Ganador Jugador2");
            setEleccionJugador1("");
            setEleccionJugador2("");
         }
    }


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

    async function JugarJugador1(eleccionJugador1,eleccionJugador2){   
        setEleccionJugador1(eleccionJugador1);
        evaluarEleccion(eleccionJugador1,eleccionJugador2);
        await sleep(3000)
        setResultado("")
    }

    async function JugarJugador2(eleccionJugador1,eleccionJugador2){   
        setEleccionJugador2(eleccionJugador2);
        evaluarEleccion(eleccionJugador1,eleccionJugador2);  
        await sleep(3000)
        setResultado("")     
    }

   function Reiniciar(){
        setEleccionJugador1(null);
        setEleccionJugador2(null);
        setResultado(null);
        setPuntosJugador2(0);
        setPuntosJugador1(0);
    }

    return (
       <div className="Jugador2">
            <div className="jugador2-container-fluid">
                <div className="row">
                    <div className="jugador2 col-md-3 col-3"> 
                        <button className="botonPiedra" onClick={() => {JugarJugador1("Piedra",eleccionJugador2)}}>
                            <img src={Piedra} className="imgPiedra"/>
                        </button>
                    </div>
                    <div className="jugador2 col-md-2 col-2"> 
                        <p>Puntos Jugador1 : {puntosJugador1}</p>
                        
                    </div>
                    <div className="jugador2 col-md-2 col-2"> 
                        <p className="tituloJugador1">Jugador1 vs Jugador2</p>
                    </div>
                    <div className="jugador2 col-md-2 col-2"> 
                        <p>Puntos Jugador2 : {puntosJugador2}</p>
                        
                    </div>
                    <div className="jugador2 col-md-3 col-3"> 
                        <button className="botonPiedra" onClick={() => {JugarJugador2(eleccionJugador1,"Piedra")}}>
                            <img src={Piedra} className="imgPiedra"/>
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="jugador2 col-md-3 col-3"> 
                        <button className="botonPapel" onClick={() => {JugarJugador1("Papel",eleccionJugador2)}}>
                            <img src={Papel} className="imgPapel"/>
                        </button>   
                    </div>
                    <div className="jugador2 col-md-2 col-2">
                        {eleccionJugador1 === "" ? 
                        <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div> : ""}
                    </div>
                    <div className="jugador2 col-md-2 col-2">
                        <p className="resultadoPartidaJugador2">{resultado}</p>
                    </div>
                    <div className="jugador2 col-md-2 col-2">
                        {eleccionJugador2 === "" ? 
                        <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div> : ""}
                    </div>
                    <div className="jugador2 col-md-3 col-3"> 
                        <button className="botonPapel" onClick={() => {JugarJugador2(eleccionJugador1,"Papel")}}>
                            <img src={Papel} className="imgPapel"/>
                        </button>   
                    </div>
                </div>
                <div className="row">
                    <div className="jugador2 col-md-3 col-3"> 
                        <button className="botonTijera" onClick={() => {JugarJugador1("Tijera",eleccionJugador2)}}>
                            <img src={Tijera} className="imgTijera"/>
                        </button>
                    </div>
                    <div className="jugador2 col-md-2 col-2"></div>
                        
                    <div className="jugador2 col-md-2 col-2"></div>    
                    <div className="jugador2 col-md-2 col-2"></div>
                    <div className="jugador2 col-md-3 col-3"> 
                        <button className="botonTijera" onClick={() => {JugarJugador2(eleccionJugador1,"Tijera")}}>
                            <img src={Tijera} className="imgTijera"/>
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="jugador2 col-md-3 col-3"> 
                        <button className="botonLagarto" onClick={() => {JugarJugador1("Lagarto",eleccionJugador2)}}>
                            <img src={Lagarto} className="imgLagarto"/>
                        </button>
                    </div>
                    <div className="jugador2 col-md-2 col-2"></div>
                    <div className="jugador2 col-md-2 col-2">
                        <p>¿ Quieres empezar de 0 ?</p>
                        <button className="btn btn-info" onClick={() => {Reiniciar()}}>Volver a empezar</button> 
                               
                    </div>
                    <div className="jugador2 col-md-2 col-2"></div>
                    <div className="jugador2 col-md-3 col-3"> 
                        <button className="botonLagarto" onClick={() => {JugarJugador2(eleccionJugador1,"Lagarto")}}>
                            <img src={Lagarto} className="imgLagarto"/>
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="jugador2 col-md-3 col-3"> 
                        <button className="botonSpock" onClick={() => {JugarJugador1("Spock",eleccionJugador2)}}>
                            <img src={Spock} className="imgSpock"/>
                        </button>
                    </div>
                    <div className="jugador2 col-md-2 col-2"></div>
                    <div className="jugador2 col-md-2 col-2">
                        <p>¿ Quieres salir ?</p>
                        <Link to={'/'}>
                        <button className="btn btn-info">Home</button> 
                        </Link>  
                    </div>
                    <div className="jugador2 col-md-2 col-2"></div>
                    <div className="jugador2 col-md-3 col-3"> 
                        <button className="botonSpock" onClick={() => {JugarJugador2(eleccionJugador1,"Spock")}}>
                            <img src={Spock} className="imgSpock"/>
                        </button>
                    </div>
                </div>       
            </div>

        </div>    
    )
}

export default Jugador2 ;