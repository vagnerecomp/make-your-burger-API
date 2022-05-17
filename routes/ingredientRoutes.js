const router = require('express').Router();
// const ingredient = require('../models/Ingredient');
const Meat = require("../models/Meat");
const Bread = require('../models/Bread');
const Alternative = require('../models/Alternative');
// const status = require('../models/Status');


// //imlementar rotas aqui

router.get('/', async (req, res)=>{
    try {
        const ingredients = {
            breads: await Bread.find(),
            meats: await Meat.find(),
            alternative: await Alternative.find()
        }

        res.status(200).json(ingredients);
    } catch (error) {
        res.status(500).json({error: error});
    }
})

module.exports = router;