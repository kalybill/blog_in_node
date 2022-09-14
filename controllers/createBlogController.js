const Blog = require('../models/blog');

exports.getCreate = (req, res, next) => {
    res.render('blog/add-blog', {
        pageTitlec : 'Create Blog',
        path : '/blog/add-blog'
    });
}

exports.getIndex = (req, res, next) => {
    Blog.findAll()
    .then(blogs => {
        res.render('blog/index', {
            pageTitle : 'All Blogs',
            blog : blogs
        })
    })
    .catch(err => {
        console.log(err)
    })
    
}

exports.postBlog = (req, res, next) => {
    const title = req.body.title;
    const body = req.body.body;
    console.log(req.body);
    
    Blog.create({
        title:title,
        body:body
    })
    .then(result => {
        console.log("Blog Created");
        res.redirect('/admin/blog')
    })
    .catch(error => {
        console.log(error);
    })
}