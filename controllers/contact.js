const mongodb = require('../db/connect');

const getAllContacts = async(req, res, next) => {
    const result = await mongodb.getDb().db("contacts").collection('contact').find().toArray();
    res.json(result);
    
   
}

const getContactById = async(req, res, next) => {
    const result = await mongodb.getDb().db("contacts").collection('contact').findOne({_id: req.params.id});
    res.json(result);
    

}

module.exports = {
    getAllContacts
}