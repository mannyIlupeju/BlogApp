import React from 'react'
import Post from './BlogPost/Post'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'



function BlogPosts({setCurrentID, currentID, isLogin}) {
  const blog = useSelector((state)=>state.blog)


  return (
    <>  
       <div className="flex justify-center">
        <div className="flex justify-center flex-row flex-wrap p-10 gap-24 text-gray-800">
         {blog.map((blog) => (
            <div key={blog._id}>  
            <Link to = {`/blog/post/${blog._id}`}>
              <Post blog={blog} currentID={currentID} setCurrentID={setCurrentID} isLogin={isLogin} id={blog._id}/>
            </Link> 
            </div>
          ))}
        
        </div>
      </div>
        
    </>
  )
}

export default BlogPosts