const asyncHandler = require('express-async-handler')
const User = require('../models/User')
const generateToken = require('../utils/generateToken')

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const {username, email, password} = req.body

  const userExists = await User.findOne({email})

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    username,
    email,
    password,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const {email, password} = req.body

  const user = await User.findOne({email})

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
}
