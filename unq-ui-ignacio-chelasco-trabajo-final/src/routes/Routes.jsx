import React from 'react';
import Home from '../components/Home/Home'
import Jugador1 from '../components/Jugador1/Jugador1';
import Jugador2 from '../components/Jugador2/Jugador2';
import Reglas from '../components/Reglas/Reglas';
import {
    BrowserRouter as Router,
    Switch,
    Route
}from "react-router-dom";
  




export default function Routes() {
    return (
        <Router>
            <Switch>               
                <Route exact path="/" component ={ Home }/>
                <Route exact path="/jugador1" component = {Jugador1}/>
                <Route exact path="/jugador2" component = {Jugador2}/>
                <Route exact path="/reglas" component = {Reglas}/> 
            </Switch>
        </Router>
    );
}