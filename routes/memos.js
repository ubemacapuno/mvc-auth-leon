const express = require('express')
const router = express.Router()
const memoController = require('../controllers/memos') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/:id', ensureAuth, memoController.getMemos)
router.get('/remove/id', memoController.deleteMemo)
router.post('/:id', memoController.addMemo)
router.put('/:id', memoController.updateMemo)

module.exports = router