const asyncHandler = require('express-async-handler')
const Post = require('../models/Post')

// @desc    Get all posts
// @route   GET /api/posts
// @access  Public
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find().populate('author', 'username email')
  res.json(posts)
})

// @desc    Create a new post
// @route   POST /api/posts
// @access  Private/Author
const createPost = asyncHandler(async (req, res) => {
  const {title, content, status} = req.body

  const post = new Post({
    title,
    content,
    author: req.user._id,
    status,
  })

  const createdPost = await post.save()
  res.status(201).json(createdPost)
})

// @desc    Update a post
// @route   PUT /api/posts/:id
// @access  Private/Author
const updatePost = asyncHandler(async (req, res) => {
  const {title, content, status} = req.body

  const post = await Post.findById(req.params.id)

  if (post) {
    post.title = title
    post.content = content
    post.status = status
    post.updatedAt = Date.now()

    const updatedPost = await post.save()
    res.json(updatedPost)
  } else {
    res.status(404)
    throw new Error('Post not found')
  }
})

// @desc    Delete a post
// @route   DELETE /api/posts/:id
// @access  Private/Author
const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id)

  if (post) {
    await post.remove()
    res.json({message: 'Post removed'})
  } else {
    res.status(404)
    throw new Error('Post not found')
  }
})

// @desc    Get post by ID
// @route   GET /api/posts/:id
// @access  Public
const getPostById = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id).populate(
    'author',
    'username email',
  )

  if (post) {
    res.json(post)
  } else {
    res.status(404)
    throw new Error('Post not found')
  }
})

module.exports = {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  getPostById,
}
