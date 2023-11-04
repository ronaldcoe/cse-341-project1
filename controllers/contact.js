const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;
const getAllContacts = async(req, res, next) => {
    const result = await mongodb.getDb().db("contacts").collection('contact').find().toArray();
    res.json(result);
    
   
}

const getContactById = async(req, res, next) => {
    console.log(req.params.id);
    const result = await mongodb.getDb().db("contacts").collection('contact').findOne({_id: new ObjectId(req.params.id)});
    res.json(result);
    

}

module.exports = {
    getAllContacts,
    getContactById
}