const express = require('express')
const router = express.Router()
const editContactsController = require('../controllers/editContacts') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/:id', ensureAuth, editContactsController.getEditContact)

router.post('/:id', editContactsController.updateContact)

// router.get('/remove/:id', editContactsController.deleteContact)

module.exports = router