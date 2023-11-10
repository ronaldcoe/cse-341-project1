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
        if (result.acknowledged) {
            return res.status(201).json({id:result.insertedId})
        } else {
            return res.status(500).json({message: "Contact creation failed"})
        }
    } catch(error) {
        next(error)
    }
}

// Put method
const updateContact = async(req, res, next) => {
    const userId = new ObjectId(req.params.id); 
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;

    try {
        const result = await mongodb.getDb().db("contacts").collection("contact").replaceOne({_id: userId}, req.body);

        if (result.modifiedCount > 0) {
            res.status(200).json({ message: "Contact updated" }); // 
        } else if(result.matchedCount == 0) {
           res.status(404).json({message:"Id no found"})
            
        }
    } catch (error) {
        res.status(500).json({ message: "An error occurred while updating the contact" });
    }
}

// Delete contact
const deleteContact = async(req, res, next) => {
    const userId = new ObjectId(req.params.id);

    try {
        const result = await mongodb.getDb().db("contacts").collection("contact").deleteOne({_id: userId})
        if (result.deletedCount > 0) {
            res.status(200).json({ message: "Contact deleted" });
        } else {
            res.status(404).json({ message: "Contact not found", result:result });
        }
    } catch(error) {
        res.status(500).json({ message: "An error occurred while deleting the contact", error: error.message });
    }
}
module.exports = {
    getAllContacts,
    getContactById,
    createContact,
    updateContact,
    deleteContact
}