const express = require('express')
const router = express.Router()
const contactsController = require('../controllers/contacts') //Declare a controller for contacts called contactsController, which references '../controllers/contacts'
const { ensureAuth, ensureGuest } = require('../middleware/auth')

//CRUD Requests for Contacts:
router.get('/', ensureAuth, contactsController.getContacts)
router.post('/createContact', contactsController.createContacts)
router.delete('/deleteContact', contactsController.deleteTodo)

module.exports = router