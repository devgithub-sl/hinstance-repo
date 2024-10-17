import { memo, useState } from "react";
import { Button, Container, Form, Alert } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function CreateBlog() {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null);
    const [content, setContent] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);

        // Prepare the form data
        const formData = new FormData();
        formData.append('title', title);
        formData.append('image', image);
        formData.append('content', content);

        try {
            // Make a POST request to your backend
            const response = await axios.post('http://localhost:4000/api/blogs', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Blog created:', response.data);
            setSuccess(true);
            // Reset form fields
            setTitle("");
            setImage(null);
            setContent("");
        } catch (err) {
            console.error('Error creating blog:', err);
            setError('Failed to create blog. Please try again.');
        }
    };

    return (
        <Container className="mt-5">
            <h1 className="text-center mb-4">Create Blog</h1>
            {success && <Alert variant="success">Blog created successfully!</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formTitle" className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter blog title" 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formImage" className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control 
                        type="file" 
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formContent" className="mb-3">
                    <Form.Label>Content</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={5} 
                        placeholder="Enter long description" 
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default memo(CreateBlog);
