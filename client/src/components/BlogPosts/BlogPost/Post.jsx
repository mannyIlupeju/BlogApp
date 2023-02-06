import React from 'react'
import DateObject from 'react-date-object';
import {Link} from 'react-router-dom'

const Post = ({blog, setCurrentID}) => {
  var date = new DateObject();
  let currentDate = date.format("dddd, MMMM DD YYYY");


  


  return (
      <>
        <div className="card lg:flex-row flex-col gap-6" onClick={()=>{setCurrentID(blog._id)}}>
          <figure>
            <img src={blog.selectedFile} className="imgbox"/>
          </figure>

          <div className="flex flex-col gap-5">
            <p className="text-xs">{currentDate}</p>

            <div>
            <h1 className="text-semibold text-lg">{blog.title}</h1>
            </div>

            <div className="lg:w-2/3 w-fit">
            <p>{blog.description}</p>
          </div>

            <div>
            <p className="text-xs absolute bottom-1">by {blog.author}</p>
            </div>
          </div>
        </div>

        
      </>
  )
}

export default Post