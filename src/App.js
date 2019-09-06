import React from 'react';
//import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {HashRouter, Route, Switch} from "react-router-dom";

import './App.css';

import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Cliente from './components/cliente/Cliente'

import DB from './db'

class App extends React.Component{

  state = {
    db: new DB('bancos')
  }

  async componentDidMount(){

    this.state.db.seedBancos()

  }

  render(){

    return (
      <HashRouter>
        <div>
          <Navbar />
          <Switch>
            
            <Route path="/" exact component={Home}></Route>
            <Route path="/clientes"  component={Cliente}></Route>
            
          </Switch>
        </div>
      </HashRouter>
      
    );

  }

}

export default App;
