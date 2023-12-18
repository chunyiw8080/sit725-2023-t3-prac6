let collection = require('../model/model');

const getAllCats = (req, res) => {
    collection.getAllCats((err, result) => {
        if (!err) {
            res.json({statusCode:200, data:result, message:'get all cats successful'});
        }else{
            console.log(err);
        }
    });
}

const postCat = (req, res) => {
    let cat = req.body;
    collection.postCat(cat, (err, result) => {
        if (!err) {
            res.json({statusCode:201, data:result, message:'success'});
        }else{
            console.log("Post cat error");
        }
    });
}

module.exports = {postCat, getAllCats};
