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
        blogpost.get({ plain: true }));
        res.render('homepage', {blogPosts});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})