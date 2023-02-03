import React from 'react'
import {useSelector} from 'react-redux'


const PostArticle = () => {
  const blog = useSelector((state)=> state.blog)
  console.log(blog)
  
  return (
    <div>PostArticle</div>
  )
}

export default PostArticle