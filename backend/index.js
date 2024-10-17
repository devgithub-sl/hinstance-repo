const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const multer = require('multer');
const path = require('path');
const userRoutes = require("./routes/user.route");
const blogRoutes = require("./routes/blog.route");

dotenv.config();

const { MONGOURL, PORT } = process.env;

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Check MongoDB URL
if (!MONGOURL) {
    console.error('MONGOURL is not defined in the environment variables.');
    process.exit(1);
}

// Connect to MongoDB
mongoose.connect(MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { 
        console.log('Connected to MongoDB');
    })
    .catch((err) => { 
        console.error('Failed to connect to MongoDB', err);
    });

// Set up storage for uploaded images
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Folder where images will be saved
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
    },
});

const upload = multer({ storage });

// Serve uploaded images
app.use('/uploads', express.static('uploads')); // Serve images from the uploads folder

// Request logging middleware
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}' - body: ${JSON.stringify(req.body)}`);
    next();
});

// Call routes here
app.use('/', userRoutes);
app.use('/api/blogs', blogRoutes(upload)); // Pass the upload instance to handle image uploads

const port = PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
