const Blog = require('../models/blog.model') // Adjust the path as necessary

// Create a new blog post
const createBlog = async (req, res) => {
    try {
        const { title, content } = req.body;
        const image = req.file ? `/uploads/${req.file.filename}` : null; // Store the image URL
        const newBlog = new Blog({ title, image, content });
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all blog posts
const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single blog post by ID
const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a blog post by ID
const updateBlog = async (req, res) => {
    try {
        const { title, content } = req.body;
        const image = req.file ? `/uploads/${req.file.filename}` : null; // Store the image URL
        const updatedBlog = await Blog.findByIdAndUpdate(
            req.params.id,
            { title, image, content },
            { new: true }
        );

        if (!updatedBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json(updatedBlog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a blog post by ID
const deleteBlog = async (req, res) => {
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
        if (!deletedBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createBlog, deleteBlog, getBlogById, getBlogs, updateBlog
}