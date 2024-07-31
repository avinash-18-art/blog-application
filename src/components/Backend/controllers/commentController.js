const asyncHandler = require('express-async-handler')
const Comment = require('../models/Comment')

// @desc    Add a comment
// @route   POST /api/comments
// @access  Private
const addComment = asyncHandler(async (req, res) => {
  const {postId, content} = req.body

  const comment = new Comment({
    post: postId,
    author: req.user._id,
    content,
  })

  const createdComment = await comment.save()
  res.status(201).json(createdComment)
})

// @desc    Get all comments
// @route   GET /api/comments
// @access  Public
const getComments = asyncHandler(async (req, res) => {
  const comments = await Comment.find()
    .populate('author', 'username email')
    .populate('post', 'title')
  res.json(comments)
})

// @desc    Approve a comment
// @route   PUT /api/comments/:id/approve
// @access  Private/Admin
const approveComment = asyncHandler(async (req, res) => {
  const comment = await Comment.findById(req.params.id)

  if (comment) {
    comment.approved = true
    const approvedComment = await comment.save()
    res.json(approvedComment)
  } else {
    res.status(404)
    throw new Error('Comment not found')
  }
})

module.exports = {
  addComment,
  getComments,
  approveComment,
}
