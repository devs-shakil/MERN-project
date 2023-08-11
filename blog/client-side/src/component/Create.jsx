import axios from 'axios';
import React, { useRef, useState } from 'react';
// import { useHistory } from 'react-router-dom';

const Create = ({ post = null }) => {
    const [title, setTitle] = useState(post ? post.title : "");
    const [content, setContent] = useState(post ? post.content : "");
    const [author, setAuthor] = useState(post ? post.author : "");
    // const history = useHistory();

    // handleSubmit
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = { title, content, author };
      
        try {
            if (post) {
                await axios.patch(`http://localhost:5173/edit/${post._id}`, newPost); // Removed ':' from the URL
            } else {
                await axios.post(`http://localhost:3000/create`, newPost);
                
            }
            
            // After creating/editing, redirect to a proper route, not '/create'
            // history.push('/'); // Redirect to the root route, you might want to adjust this to your needs
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit} >
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <label>Content:</label>
                <textarea name="" id="" cols="30" rows="10" value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
                <label>Author:</label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                <button type='submit'>Post</button>
            </form>
        </div>
    );
};

export default Create;
