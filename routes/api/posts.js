const express = require('express')
const router = express.Router()

// @route   GET api/posts
// @desc    Test route
// @access  Public(do not need auth, token)
router.get('/', (req, res) => res.send('Post route'))

module.exports = router