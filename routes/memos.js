const express = require('express')
const router = express.Router()
const memoController = require('../controllers/memos') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/:id', ensureAuth, memoController.getMemo)
router.get('/remove/id', memoController.deleteTask)
router.post('/:id', memoController.addMemo)

module.exports = router