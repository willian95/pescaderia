import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component{

    render(){

        return(
            <nav className="grey darken-4">
            <div className="nav-wrapper">
              <Link to="/">
                <div className="brand-logo">Inicio</div>
              </Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <Link to="/clientes">
                  <li>Clientes</li>
                </Link>
              </ul>
            </div>
          </nav>
        )

    }

}

export default Navbar