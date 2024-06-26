const router = require('express').Router();
const { Blog, User, Comments } = require('../models');

router.get('/', async (req, res) =>{
    try{
        const dbBlogData = await Blog.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });
        const blogPosts = dbBlogData.map((blogPost) =>
        blogPost.get({ plain: true }));
        res.render('homepage', {blogPosts, logged_in: req.session.logged_in});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/blogpost/:id', async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id, {
            include: [
                {
                    model: User, 
                    attributes: ['name'],
                },
                {
                    model: Comments,
                    attributes: ['content', 'user_id'],
                }
            ],
        });
        const blogPost = blogData.get({ plain: true });

        res.render('blog-post', {
            ...blogPost,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/dashboard', async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            where: {
                user_id: req.session.user_id,
            },
            include: [{
                model: Comments,
                attributes: ['content'],
            }]
        });
        const blogPosts = blogData.map((blogPost) => 
        blogPost.get({plain: true}));
        res.render('dashboard', {blogPosts, logged_in: req.session.logged_in});
    } catch (err) {
        res.status(500).json(err)
    }
    
});

router.get('/login', (req, res) => {
        res.render('login');
});

module.exports = router;