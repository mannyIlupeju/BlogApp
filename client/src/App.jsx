import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './index.css'
import Navbar from './components/shared/Navbar'
import BlogPosts from './components/BlogPosts/BlogPosts'
import Form from './components/BlogForm/Form';
import PostArticle from './components/BlogPosts/BlogPost/PostArticle'
import { useDispatch } from 'react-redux' //import useDispatch from react-redux so that we can dispatch an action
import { getPosts } from './actions/blogposts'


function App() {
  //define the dispatch
  const dispatch = useDispatch()
  const [currentID, setCurrentID] = useState('')



  // console.log(currentID)

  const [postData, setPostData] = useState({author:'', title:'', description:'', body:'', tags:'', selectedFile:''})

  //we need to use useEffect to dispatch the action
  useEffect(()=>{
     dispatch(getPosts(currentID));
  },[currentID, dispatch]);

  console.log(currentID)
  

  return (
    <>
     <div className="">
      <Router>
      <Navbar/>
      
      <main>
        <Routes>
          <Route path= '/' exact element = {<BlogPosts setCurrentID={setCurrentID} currentID={currentID}/>}/>
          <Route path='/form' exact element={<Form postData={postData} setPostData={setPostData}/>}/>
          <Route path = '/blog/post/:id' exact element={<PostArticle currentID={currentID}/>}/>
        </Routes>
      </main>
      </Router>
    </div>
    </>
  )
}

export default App
