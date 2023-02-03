import React, {useState, useEffect} from 'react'
import FileBase from 'react-file-base64'
import {useSelector, useDispatch} from 'react-redux'
import {createPost} from '../../actions/blogposts'

const Form = () => {
  const [postData, setPostData] = useState({author:'', title:'', description:'', body:'', tags:'', selectedFile:''})
  const [message, setMessage] = useState(false)
  
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()
    
    console.log(postData)
    dispatch(createPost(postData))
    setMessage(true)

    clear()

  }

  const successMessage = () => {
    setTimeout(() => {
      <div>
        <h3>Post successfully made!</h3>
      </div>
    }, 3000);
  }
  

  const clear = () => {
    setPostData({author:'', title:'', description:'', body:'', tags:'', selectedFile:''})
  }




  return (
    <>
    <div className="flex justify-center">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 mt-10">
    
            <label htmlFor = "title">
              Title:
            </label>
            <input type="text" name="title" id="title" value={postData.title} onChange={(e)=>{
              setPostData({...postData, title:e.target.value})
            }}/>
       
            <label htmlFor = "author">
              Author:
            </label>
            <input type="text" name="author" id="author" value={postData.author} onChange={(e)=>{
              setPostData({...postData, author:e.target.value})
            }}/>

        
            <label htmlFor ="description" name="description">
              Description:
            </label>
            <textarea cols="30" rows="3" value={postData.description} onChange={(e)=>{
              setPostData({...postData, description: e.target.value})
            }}></textarea>

            
            <textarea cols="30" rows="10" value={postData.body} onChange={(e)=>{
              setPostData({...postData, body: e.target.value})
            }}></textarea>
           

            <label htmlFor = "tags">
              Tags:
            </label>
            <input type="text" name="author" id="author" value={postData.tags} onChange={(e)=>{
              setPostData({...postData, tags:e.target.value})
            }}/>
       
            <div>
              <FileBase type = "file" onDone={({base64})=> setPostData({...postData, selectedFile: base64})}/>
            </div>

            <button className="btn" type="submit" >Submit</button>
        </div>
      </form>
    </div>

      {message && successMessage()}
    </>
  )
}

export default Form