import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './index.css'
import Navbar from './components/shared/Navbar'
import BlogPosts from './components/BlogPosts/BlogPosts'
import Login from './components/authorization/Login'
import SignIn from './components/authorization/SignIn'
import Register from './components/authorization/Registration'
import Form from './components/BlogForm/Form';
import PostArticle from './components/BlogPosts/BlogPost/PostArticle'
import { useDispatch } from 'react-redux' //import useDispatch from react-redux so that we can dispatch an action
import { getPosts } from './actions/blogposts'
import { setAuthToken } from './api';


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

  // if token exists in localStorage it will automatically log user in
  const token = localStorage.getItem("token")
  if(token) {
    setAuthToken(token)
  }
  

  return (
    <>
     <div className="">
      <Router>
      <Navbar token ={token}/>
      
      <main>
        <Routes>
          <Route path= '/' exact element = {<BlogPosts setCurrentID={setCurrentID} currentID={currentID}/>}/>
          <Route path='/blog/form' exact element={<Form postData={postData} setPostData={setPostData}/>}/>

          <Route path='/blog/signin' exact element={<SignIn/>}/>
          <Route path='/blog/login' exact element={<Login token={token}/>}/>
          <Route path='/blog/register' exact element={<Register/>}/>
          <Route path = '/blog/post/:id' exact element={<PostArticle currentID={currentID}/>}/>
        </Routes>
      </main>
      </Router>
    </div>
    </>
  )
}

export default App
