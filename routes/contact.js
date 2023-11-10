const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact');

router.get('/', contactController.getAllContacts);
router.get('/:id', contactController.getContactById);

router.post('create_contact', contactController.createContact)

module.exports = router;
