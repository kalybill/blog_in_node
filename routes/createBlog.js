const express = require('express');
const router = express.Router();

const createBlogController = require('../controllers/createBlogController');

router.get('/blog/add-blog', createBlogController.getCreate);
router.get('/blog', createBlogController.getIndex);
router.post('/add-blog', createBlogController.postBlog);

module.exports = router;