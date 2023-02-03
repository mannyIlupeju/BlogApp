import React from 'react'
import Post from './BlogPost/Post'
import { useSelector } from 'react-redux'



function BlogPosts() {
  const blog = useSelector((state)=>state.blog)

  return (
    <>  
       <div className="container mx-auto gap-10 p-10">
        <div className="flex flex-col gap-12 p-10">
         {blog.map((blog) => (
            <div key={blog._id}>
              <Post blog={blog}/>
            </div>
          ))}
        </div>
      </div>
        
    </>
  )
}

export default BlogPosts