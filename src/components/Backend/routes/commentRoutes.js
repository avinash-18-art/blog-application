const express = require('express')
const {
  addComment,
  getComments,
  approveComment,
} = require('../controllers/commentController')
const {protect, admin} = require('../middleware/authMiddleware')
const router = express.Router()

router.route('/').post(protect, addComment).get(getComments)

router.route('/:id/approve').put(protect, admin, approveComment)

module.exports = router
