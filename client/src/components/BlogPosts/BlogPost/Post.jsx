import React from 'react'
import DateObject from 'react-date-object';
import {Link} from 'react-router-dom'

const Post = ({blog, setCurrentID}) => {
  var date = new DateObject();
  let currentDate = date.format("dddd, MMMM DD YYYY");


  


  return (
      <>
        <div className="card lg:flex-row flex-col gap-3" onClick={()=>{setCurrentID(blog._id)}}>
          <figure>
            <img src={blog.selectedFile} className="imgbox"/>
          </figure>

          <div className="flex flex-col gap-5 md:ml-28 sm:ml-14  xl:ml-4 md:gap-2">
            <p className="text-xs">{currentDate}</p>

            <div>
            <h1 className="text-extrabold text-4xl">{blog.title}</h1>
            </div>

            <div className="mt-4 lg:w-2/3 w-fit">
            <p className="text-xl">{blog.description}</p>
          </div>

            <div>
            <p className="text-xs absolute -bottom-4 xl:bottom-1">by {blog.author}</p>
            </div>
          </div>
        </div>

        
      </>
  )
}

export default Post