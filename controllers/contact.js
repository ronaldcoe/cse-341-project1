const mongodb = require('../db/connect');

const ObjectId = require('mongodb').ObjectId;
const getAllContacts = async(req, res, next) => {
    const result = await mongodb.getDb().db("contacts").collection('contact').find().toArray();
    res.json(result);
    
   
}

const getContactById = async(req, res, next) => {
    const result = await mongodb.getDb().db("contacts").collection('contact').findOne({_id: new ObjectId(req.params.id)});
    res.json(result);
    

}

// Create a POST route to create a new contact. All fields are required. Return the new contact id in the response body.
const createContact = async(req, res, next) => {
    const { firstName, lastName, email, favoriteColor, birthday } = req.body
    if (
        !firstName || 
        !lastName || 
        !email || 
        !favoriteColor || 
        !birthday) 
    {
        return res.status(400).json({ message: "All inputs are required"})
    }
    try {
        const result = await mongodb.getDb().db("contacts").collection('contact').insertOne(req.body);
        if (result.acknowledge) {
            return res.status(200).json({messsage:"Contact created"})
        } else {
            return res.status(500).json({message: "Contact creation failed"})
        }
    } catch(error) {
        next(error)
    }
    

    

}

module.exports = {
    getAllContacts,
    getContactById,
    createContact
}