const connection = require('./connectionMongo');

async function getAllProducts(){
   
    const connectionMongo = await connection.getConnection();

    const productos = await connectionMongo.db('DB')
                        .collection('productos')
                        .find()
                        .toArray();
    return productos;
}

async function getProduct(id){

    const connectionMongo = await connection.getConnection();
    const producto = await connectionMongo.db('DB')
                        .collection('productos')
                        .findOne({_id: parseInt(id) });
    return producto;
}

async function pushProduct(producto){
    
    const connectionMongo = await connection.getConnection();
    const result = await connectionMongo.db('DB')
                        .collection('productos')
                        .insertOne(producto);
    return result;
}

async function updateProduct(producto){
    const connectionMongo = await connection.getConnection();
    const query = {_id: parseInt(producto._id)}
    const newvalues = {
        $set: {
            descripcion: producto.descripcion, precio: producto.precio
        }
    }
    const result = await connectionMongo.db('DB')
                        .collection('productos')
                        .updateOne(query, newvalues);
    return result;
}

async function deleteProduct(id){
    const connectionMongo = await connection.getConnection();
    const result = await connectionMongo.db('DB')
                    .collection('productos')
                    .deleteOne({_id: parseInt(id)});
    return result;
}

module.exports = {getAllProducts, getProduct, pushProduct, updateProduct, deleteProduct}