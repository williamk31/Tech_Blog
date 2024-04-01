const router = require('express').Router();
const { Blog, User } = require('../models');
const withAuth = require('../utils/auth');

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
        res.render('homepage', {blogPosts});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// TO DO: Add get routes for single blog posts, require log-in

// TO DO: Add post routes for blog posts, require log-in

//TO DO: Add put routes for blog posts, require log-in

//TO DO: add delete routes for blog posts, require log-in

module.exports = router;