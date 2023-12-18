const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.get('/', function (req,res) {
    res.render('index.html');
});

router.get('/api/cat', (req,res) => {
    controller.getAllCats(req, res);
});

router.post('/api/cat', (req,res)=>{
    controller.postCat(req,res);
});

module.exports = router;