const express = require('express');
const router = express.Router();
const dataProducto = require('../data/Product');

/* Listado de todos los productos */
router.get('/', async function(req, res) {
  const data = await dataProducto.getAllProducts();
  res.json(data);
});

/* Un producto especifico */
router.get('/:id', async (req, res) => {
    res.json(await dataProducto.getProduct(req.params.id));
});

// Alta de producto
router.post('/', async (req, res) =>{
    const producto = req.body;
    try{
      const result = await dataProducto.pushProduct(producto);
      res.json(result);
    }
    catch (error) {
      res.status(500).send(error);
    }
});

// Modificacion de producto
router.put('/:id', async (req, res) =>{
  const producto = req.body;

  try {
    producto._id = req.params.id;
    const result = await dataProducto.updateProduct(producto);
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Eliminacion de producto
router.delete('/:id', async (req, res)=>{
  try {
    const result = await dataProducto.deleteProduct(req.params.id);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;