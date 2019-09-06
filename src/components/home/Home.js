import React from 'react'
import './Home.css'


class Home extends React.Component{

    render(){

        return(
            <div className="container home-container">
                <div className="row">
                    <div className="col m4">
                        <div className="card  blue darken-1 z-depth-2">
                            <div className="card-content white-text">
                                <span className="card-title">Clientes</span>
                                <h3 className="center-align">40</h3>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        )

    }

}

export default Home