var express = require('express')
var router = express.Router()
const dataUser = require('../data/User')

/* GET users listing. */
router.get('/', async function(req, res) {
  const data = await dataUser.getAllUsers()
  res.json(data)
})

router.get('/:id', async (req, res) => {
  // res.json el estatus es 200 por defecto
  res.json(await dataUser.getUser(req.params.id))
})

router.post('/', async (req, res) =>{
  const user = req.body
  try{
    const result = await dataUser.pushUser(user)
    //const inventorPersistido = await dataInventor.getInventor(inventor._id);
    res.json(result)
  }
  catch (error) {
    res.status(500).send(error)
  }
})

router.put('/:id', async (req, res) =>{
  const user = req.body

  try {
    user._id = req.params.id
    const result = await dataUser.updateUser(user)
    res.json(result)
  } catch (error) {
    res.status(500).send(error)
  }
})

router.delete('/:id', async (req, res)=>{
  try {
    const result = await dataUser.deleteUser(req.params.id)
    res.send(result)
  } catch (error) {
    res.status(500).send(error)
  }
})

router.post("/login", async (req, res, next) => {

  const datos = req.body
  const user = await dataUser.getUserUsuario(datos.usuario)

  if (!user) 
    return res.status(404).send(`Usuario incorrecto`)
 
  const passValida = await dataUser.validarPassBcrypt(user.usuario, datos.password)

  if (!passValida) 
    return res.status(404).send(`Contraseña incorrecta`)

  res.json(`Usuario logueado con exito`)

})

module.exports = router
