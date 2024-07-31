const express = require('express')
const {
  registerUser,
  loginUser,
  getUserProfile,
} = require('../controllers/userController')
const {protect, admin} = require('../middleware/authMiddleware')
const router = express.Router()

router.route('/').post(registerUser)
router.post('/login', loginUser)
router.route('/profile').get(protect, getUserProfile)

module.exports = router
