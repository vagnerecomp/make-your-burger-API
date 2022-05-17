const router = require('express').Router();
const Status = require('../models/Status');


// //imlementar rotas aqui

router.get('/', async (req, res)=>{
    try {
        const status =  await Status.find();

        res.status(200).json(status);
    } catch (error) {
        res.status(500).json({error: error});
    }
})

module.exports = router;