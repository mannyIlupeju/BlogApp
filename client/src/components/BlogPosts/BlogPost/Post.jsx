import React from 'react'
import DateObject from 'react-date-object';
import {Link} from 'react-router-dom'
import {FaTrash} from 'react-icons/fa'
import { deletePost } from '../../../actions/blogposts';
import { useDispatch } from 'react-redux';

const Post = ({blog, currentID, isLogin, setCurrentID}) => {
  var date = new DateObject();
  let currentDate = date.format("dddd, MMMM DD YYYY");

  //setting dispatch
  const dispatch = useDispatch()


  //delete post functionality 
  const deleteItem = (e) => {
    e.preventDefault();
    dispatch(deletePost(currentID));
  }


  return (
      <>
        <div className="flex-col gap-10 w-96 postBcground" onClick={()=>{setCurrentID(blog._id)}}>
          <figure>
            <img src={blog.selectedFile} className="imgbox rounded-lg"/>
            <div className="relative left-70 mt-2">
              {isLogin && <FaTrash color="white" onClick={deleteItem}/>}
            </div>
          </figure>

          <div className="flex flex-col gap-2 mt-4 md:gap-2 w-fit">
            <p className="text-xs">{currentDate}</p>

            <div>
            <h1 className="text-extrabold text-2xl">{blog.title}</h1>
            </div>

            <div>
            <p className="text-sm textDesc w-3/4">{blog.description}</p>
          </div>

            <div>
            <p className="text-xs">by {blog.author}</p>
            </div>
          </div>
        </div>

        
      </>
  )
}

export default Post