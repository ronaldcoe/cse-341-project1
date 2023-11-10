const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact');

router.get('/', contactController.getAllContacts);
router.get('/:id', contactController.getContactById);

router.post('/create_contact', contactController.createContact)

router.put('/update_contact/:id', contactController.updateContact)
router.delete('/delete_contact/:id', contactController.deleteContact)
module.exports = router;
