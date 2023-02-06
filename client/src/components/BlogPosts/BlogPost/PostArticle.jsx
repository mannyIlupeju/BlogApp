import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {useSelector} from 'react-redux'


const PostArticle = () => {
  //destructure the id from the dynamic route we created in BlogPosts using useParams
  const {id} = useParams();

  //using the state stored in redux, if ID is true then we should use the find method to check if the blog.id matches id and store in blog variable
  const blog = useSelector((state)=> id ? state.blog.find((blog)=>
    blog._id === id
  ) : null)

  console.log(blog)

  return (
    <div>
      <div className="p-12">

        <div className="mb-8">
          <h1 className="text-4xl">{blog.title}</h1>
          <p className="text-xs mt-3"> by {blog.author}</p>
        </div>
        
        <div className="text-xl w-2/4">
          <p>{blog.body}</p>
        </div>

        <div className="mt-20">
          <Link to ="/">
          <button className="btn btn-warning">READ MORE</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PostArticle