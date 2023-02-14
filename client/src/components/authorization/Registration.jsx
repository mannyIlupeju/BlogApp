import React, {useState, useEffect} from 'react'
import { registerPost } from '../../actions/authPosts'
import {useSelector, useDispatch} from 'react-redux'
import Success from './Messages/success'


const Registration = () => {
  const [userCreated, setUserCreated] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const [userData, setUserData] = useState({name: '', email: '', password:'', retype: ''})
  const dispatch = useDispatch()



  const handleSubmit = (e) => {
    //prevent default submission
    e.preventDefault()

    console.log(userData)
    //check if password matches
    if(userData.password === userData.retype) {
      //dispatch userData to registerPost
      dispatch(registerPost(userData))

      setUserCreated(true)

      setTimeout(()=>{
        setUserCreated(false)
      },2000)
      
      //display message = user created
      clear()
    }

    else{
      console.log("make sure the password matches")
    }
  }

  const clear = () => {
    setUserData({name: '', email: '', password:'', retype: ''})
  }

  return (
    <>
      <div className="flex justify-center h-screen">
        <div className="mt-20 bg-white w-96 p-12 h-fit">
        <div className="flex justify-center mb-8">
          {userCreated && <Success/>}
        </div>
          <div>
            <div className="text-center mb-10">
            <h1 className="uppercase text-slate-900 text-2xl">Register</h1>
            </div>
            <form className="flex flex-col gap-3">
              <label htmlFor="name">
                  Name:
              </label>
              <input type="text" name="name" id="name" value={userData.name} onChange={(e)=>{
                e.preventDefault()
                setUserData({...userData, name: e.target.value})
              }} required/>
              <label htmlFor="email">
                  Email:
              </label>
              <input type="text" name="email" id="email" value={userData.email} onChange={(e)=>{
                e.preventDefault()
                setUserData({...userData, email: e.target.value})
              }}required/>
              <label htmlFor="name">
                  Password:
              </label>
              <input type="text" name="password" id="password" value={userData.password} onChange={(e)=>{
                e.preventDefault()
                setUserData({...userData, password: e.target.value})
              }} required/>
              <label htmlFor="name">
                  Retype password:
              </label>
              <input type="text" name="password" id="password"  value={userData.retype} onChange={(e)=>{
                e.preventDefault()
                setUserData({...userData, retype: e.target.value})
              }}required/>

              <button type="submit" className="btn mt-10" onClick={handleSubmit}>Submit</button>
            </form>
          </div>
      </div>
      </div>

    </>
  )
}

export default Registration