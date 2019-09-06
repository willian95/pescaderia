import React from 'react'
import CrearClienteModal from './CrearClienteModal'

class Cliente extends React.Component{

    render(){

        return(
            <div className="container">
                
                <div className="row">
                    <div className="col-12">
                        <h3 className="center-align">Clientes</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="center-align">
                            <button data-target="crearClienteModal" className="btn-floating btn-large waves-effect waves-light red modal-trigger"><i className="fas fa-plus"></i></button>
                        </div>
                    </div>
                </div>

                <CrearClienteModal></CrearClienteModal>

                
                <div className="row">
                    <div className="col-12">
                        <table>
                            <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Cédula</th>
                                <th>N° cuenta</th>
                                <th>Banco</th>
                                <th>Acciones</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td>Willian</td>
                                <td>12345678</td>
                                <td>12312312312312313213</td>
                                <td>Banco de Venezuela</td>
                                <td>
                                    <button className="waves-effect waves-light btn blue darken-3"><i className="fas fa-edit"></i></button>
                                    <button className="waves-effect waves-light btn grey darken-1"><i className="fas fa-trash"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>Willian</td>
                                <td>12345678</td>
                                <td>12312312312312313213</td>
                                <td>Banco de Venezuela</td>
                                <td>
                                    <button className="waves-effect waves-light btn blue darken-3"><i className="fas fa-edit"></i></button>
                                    <button className="waves-effect waves-light btn grey darken-1"><i className="fas fa-trash"></i></button>
                                </td>
                            </tr>
                            <tr>
                                <td>Willian</td>
                                <td>12345678</td>
                                <td>12312312312312313213</td>
                                <td>Banco de Venezuela</td>
                                <td>
                                    <button className="waves-effect waves-light btn blue darken-3"><i className="fas fa-edit"></i></button>
                                    <button className="waves-effect waves-light btn grey darken-1"><i className="fas fa-trash"></i></button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        )

    }

}

export default Cliente