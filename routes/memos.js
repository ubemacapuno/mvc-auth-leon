const express = require('express')
const router = express.Router()
const memoController = require('../controllers/memos') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, memoController.getMemos)
router.delete('/deleteMemo', memoController.deleteMemo)
router.post('/:id', memoController.addMemo)

module.exports = router