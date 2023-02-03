const express = require('express')
const router = express.Router()

const {getPost, createPost, readPost, deletePost} = require('../controllers/blogPost.js')


//get blog posts
router.get('/', getPost)
router.get('/post/:id', readPost)
router.post('/', createPost)
router.delete('/post/:id', deletePost)


module.exports = router