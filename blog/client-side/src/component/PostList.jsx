import axios from "axios";
import { useEffect, useState } from "react";

const PostList = () => {
    // store all post to the state
    const [post, setPost] = useState([]);

    useEffect(() =>{
        fetchPosts()
    },[])
     
    // fetch all posts
    const fetchPosts = async () =>{
        try {
            const response  = await axios.get('http://localhost:3000/');
            setPost(response.data);
          
        } catch (error) {
            console.error(error)
        }
    }
   
    return (
        <div>
            {/* Render */}
            {post.map((post) =>(
                <div key={post._id}>
                    <h2>Title: {post.title}</h2>
                    <p>Content: {post.content}</p>
                    <p>Author: {post.author}</p>
                    <p>Create at: {new Date(post.createAt).toLocaleString()}</p>
                </div>
            ))}
        </div>
    );
};

export default PostList;