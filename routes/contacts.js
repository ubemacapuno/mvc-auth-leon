const express = require('express')
const router = express.Router()
const contactsController = require('../controllers/contacts') //Declare a controller for contacts called contactsController, which references '../controllers/contacts'
const { ensureAuth, ensureGuest } = require('../middleware/auth')

//Get Post and Delete operations:
router.get('/', ensureAuth, contactsController.getContacts)
router.post('/createContact', contactsController.createContact)
router.delete('/deleteContact', contactsController.deleteContact)

module.exports = router