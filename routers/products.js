// importing important packages
const express = require('express')
// importing Product schema
const { Product } = require('../models/product')
// importing Crud controller
const crudController = require("../controller/crudController");
const router = express.Router()

// get All Category route
router.get('/', async (req, res) =>{

    crudController
    .getAll(Product)
    .then((userData) => {
        res.status(200).json(userData);
    })
    .catch((error) => {
      log.error(error);
      res.status(500).json({
            error: err,
            success: false
      })
    });

})

// get category by id route
router.get('/:id', async(req,res)=>{

    crudController
    .getById(Product, req.params.id)
    .then((userData) => {
        if(!userData) {
        res.status(500).json({message: 'The product with the given ID was not found.'})
        } else{
        res.status(200).json(userData);
        }
    })
    .catch((error) => {
      log.error(error);
      res.status(500).json({
            error: err,
            success: false
      })
    });

})

// add category route
router.post('/add', (req, res) =>{

    crudController
    .add(Product, req.body)
    .then((userData) => {
        res.status(200).json(userData);
    })
    .catch((error) => {
      log.error(error);
      res.status(500).json({
            error: err,
            success: false
      })
    });


})

// update category by id route
router.put('/:id',async (req, res)=> {

    crudController
    .updateBy(Product,req.params.id ,req.body)
    .then((userData) => {
    if(!userData)
    return res.status(400).send('the product cannot be created!')

        res.status(200).json(userData);
    })
    .catch((error) => {
      log.error(error);
      res.status(500).json({
            error: err,
            success: false
      })
    });

   
})

// delete category by id route
router.delete('/:id', (req, res)=>{

    crudController
    .delete(Product,req.params.id)
    .then((userData) => {
        // res.status(200).json(userData);
        if(userData) {
            return res.status(200).json({success: true, message: 'the product is deleted!'})
        } else {
            return res.status(404).json({success: false , message: "product not found!"})
        }

    })
    .catch((error) => {
      log.error(error);
      res.status(500).json({
            error: err,
            success: false
      })
    });

})

module.exports = router