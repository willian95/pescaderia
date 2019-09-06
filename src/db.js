import PouchDB from 'pouchdb'

export default class DB{

    constructor(name){
        this.db = new PouchDB(name)
    }

    async getBancos(){

        let todosBancos = await this.db.allDocs({ include_docs: true })
        let bancos = {}

        todosBancos.rows.forEach(n => bancos[n.id] = n.doc)

        return bancos

    }

    async seedBancos(){

        
        var listadoBancos = [
            {
                _id: 1,
                nombre: '100% Banco',
            },
            {
                _id: 2,
                nombre: 'Bancamiga',
            },
            {
                _id: 3,
                nombre: 'BanCaribe',
            },
            {
                _id: 4,
                nombre: 'Banco Activo',
            },
            {
                _id: 5,
                nombre: 'Banco Agrícola de Venezuela',
            },
            {
                _id: 6,
                nombre: 'Banco Bicentenario del Pueblo',
            },
            {
                _id: 7,
                nombre: 'Banco Caroní',
            },
            {
                _id: 8,
                nombre: 'Banco de Comercio Exterior (Bancoex)',
            }
  
        ]

        await this.db.put(listadoBancos)

    }

}