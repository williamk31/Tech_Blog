const router = require('express').Router();

const userRoutes = require('./user-routes');
const blogRoutes = require('./blog-routes');

router.use('/users', userRoutes);
router.use('/blogposts', blogRoutes);

module.exports = router;