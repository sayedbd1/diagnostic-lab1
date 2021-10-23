import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Blogs.css'

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() =>{
        fetch('./blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
      <div className="blog">
            <h2 className="text-primary py-4 my-4">News and Blogs</h2>
        <div className="news container">
        {
                blogs.map(blog => <Blog
                key = {blog.id}
               blog ={blog}
                ></Blog>)
            }
        </div>
        </div>
    );
};

export default Blogs;