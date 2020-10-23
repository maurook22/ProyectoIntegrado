const connection = require('./connectionMongo');
const bcrypt = require("bcrypt");

async function getAllUsers(){

    const connectionMongo = await connection.getConnection();

    const users = await connectionMongo.db('DB')
                        .collection('users')
                        .find()
                        .toArray();
    return users;
}

async function getUserUsuario(usuario){

    const connectionMongo = await connection.getConnection();
    const user = await connectionMongo.db('DB')
                        .collection('users')
                        .findOne({usuario: usuario });
    return user;
}

async function getUser(id){

    const connectionMongo = await connection.getConnection();
    const user = await connectionMongo.db('DB')
                        .collection('users')
                        .findOne({_id: parseInt(id) });
    return user;
}

async function pushUser(user){
    // const data = await readMocInventor();
    // data.inventors.push(inventor);
    // await writeMocInventor(data);
    user.password = await encriptarPass(user.password);
    const connectionMongo = await connection.getConnection();
    const result = await connectionMongo.db('DB')
                        .collection('users')
                        .insertOne(user);
    return result;
}

async function updateUser(user){
    const connectionMongo = await connection.getConnection();
    const query = {_id: parseInt(user._id)}
    const newvalues = {
        $set: {
            usuario: user.usuario, password: user.password
        }
    }
    const result = await connectionMongo.db('DB')
                        .collection('users')
                        .updateOne(query, newvalues);
    return result;
}

async function deleteUser(id){
    const connectionMongo = await connection.getConnection();
    const result = await connectionMongo.db('DB')
                    .collection('users')
                    .deleteOne({_id: parseInt(id)});
    return result;
}

async function encriptarPass(password) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}

async function validarPassBcrypt(usuario, password) {
    userDB = await getUserUsuario(usuario);
    return await bcrypt.compare(password, userDB.password);
 }

module.exports = {getAllUsers, getUser, pushUser, updateUser, deleteUser, getUserUsuario, validarPassBcrypt}