var { buildSchema } = require('graphql')

var schema = buildSchema(`
    type Query {
        buscar: [Producto],
    },
    type Mutation {
        guardarProducto(title: String, price: String, thumbnail: String) : Producto,
        actualizarProducto(_id: String!, title:String, price: String, thumbnail: String) : Producto,
        borrarProducto(_id: String!) : Producto
    },
    type Producto {
        _id: String,
        title: String,
        price: String,
        thumbnail: String
    }
`)

module.exports = {schema}