const router = require('express').Router();
const { User, Blog } = require('../../models');
const withAuth = require('../../utils/auth');

// TO DO: Add post routes for blog posts, require log-in
router.post('/', withAuth, async (req, res) => {
    try{
        const newBlogPost = await Blog.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newBlogPost);
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
});


//TO DO: Add put routes for blog posts, require log-in

//TO DO: add delete routes for blog posts, require log-in
router.delete('/:id', withAuth, async (req,res) => {
    try{
        const blogPost = await Blog.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!blogPost) {
            res.status(400).json({ message: 'No blog post with this id'});
            return;
        }

        res.status(200).json(blogPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;