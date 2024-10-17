const express = require('express');
const blogController = require("../controllers/blog.controller");

const router = express.Router();

// Define routes
router.post('/', blogController.createBlog); // Create a new blog post
router.get('/', blogController.getBlogs); // Get all blog posts
router.get('/:id', blogController.getBlogById); // Get a single blog post by ID
router.put('/:id', blogController.updateBlog); // Update a blog post by ID
router.delete('/:id', blogController.deleteBlog); // Delete a blog post by ID

const setupBlogRoutes = (upload) => {
    router.post('/', upload.single('image'), blogController.createBlog); // Handle image upload
    return router;
};

// Export using CommonJS syntax
module.exports = setupBlogRoutes;
