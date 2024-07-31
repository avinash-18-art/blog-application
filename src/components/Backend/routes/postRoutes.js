const express = require('express')
const {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  getPostById,
} = require('../controllers/postController')
const {protect, admin, author} = require('../middleware/authMiddleware')
const router = express.Router()

router.route('/').get(getPosts).post(protect, author, createPost)

router
  .route('/:id')
  .get(getPostById)
  .put(protect, author, updatePost)
  .delete(protect, author, deletePost)

module.exports = router
