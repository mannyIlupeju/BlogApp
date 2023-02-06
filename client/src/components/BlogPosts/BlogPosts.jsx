import React from 'react'
import Post from './BlogPost/Post'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'



function BlogPosts({setCurrentID, currentID}) {
  const blog = useSelector((state)=>state.blog)


  return (
    <>  
       <div className="container mx-auto gap-10 p-10">
        <div className="flex flex-col gap-12 p-10">
         {blog.map((blog) => (
            <div key={blog._id}>  
            <Link to = {`/blog/post/${blog._id}`} >
              <Post blog={blog} setCurrentID={setCurrentID} id={blog._id}/>
            </Link> 
            </div>
          ))}
        </div>
      </div>
        
    </>
  )
}

export default BlogPosts