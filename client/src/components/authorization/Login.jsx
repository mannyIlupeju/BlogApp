import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginPost } from '../../actions/authPosts'
import RiseLoader from 'react-spinners/RiseLoader'




const Login = ({isLogin, setisLogin}) => {
  const [successMessage, setsuccessMessage] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const [checkUserData, setcheckUserData] = useState({email: '', password: ''})
  const [isLoading, setisLoading] = useState(false)
  const [color, setColor] = useState('#ffffff')



  //setting useDispatch
  const dispatch = useDispatch()

  //Clear fields login
  const clearLogin= () => {
    setcheckUserData({name: '', email: '', password:''})
  }
  
  //Login functionality control 
  // function loginfunctionality () {
    
  //   if(localStorage.getItem('token')) {
  //     setisLoading(false)
  //     setisLogin(true)
  //     setsuccessMessage(true)
      
  //     setTimeout(() => {
  //     clearLogin()
  //     setsuccessMessage(false)
  //     }, 2000);
  //   } 
  //   else if (!token) {
  //     setErrorMessage(true)

  //     setTimeout(() => {
  //       clearLogin()
  //       setErrorMessage(false)
  //     }, 2000);
  //   }
  // }

  const navigate = useNavigate()
  
  //Login submit functionality
  const handleSubmit = (e) => {
  
    e.preventDefault()
    dispatch(loginPost(checkUserData))
    setisLoading(true)

    setTimeout(() => {
      const token = localStorage.getItem('token')
      console.log(token)
      if(token){
        setisLoading(false)
        setisLogin(true)
        setsuccessMessage(true)
        navigate ('/', {replace: true})
      }
      
    }, 2000);
    // if(token) {
    //   navigate ('/', {replace: true})
        
    //   setTimeout(() => {
    //   clearLogin()
    //   setsuccessMessage(false)
    //   }, 2000);
    // } 
  }


 


  

  return (
    <>
    <div className="flex justify-center mx-auto mt-20 h-screen">
      <div className="postBcground h-fit p-12 w-96">
        <div className="text-center mb-4">
          <h1 className="uppercase text-2xl text-slate-900">Login</h1>
        </div>
       
        {successMessage &&
          <div className="text-center mb-4 bg-slate-800 p-4 w-fit mx-auto">
            <h4>User is now Logged in</h4>
          </div> 

        }
        {errorMessage && 
        <div className="text-center mb-4 bg-slate-800 p-4 w-fit mx-auto">
            <h4>Email address or password is not correct</h4>
          </div> 
        }

          <div>
            <form className="flex flex-col gap-3">
              <label htmlFor="email" className="text-white">
                  Email:
              </label>
              <input type="text" name="email" id="email" value={checkUserData.email} onChange={(e)=>{
                e.preventDefault()
                setcheckUserData({...checkUserData, email:e.target.value})
              }} required/>
              <label htmlFor="password" className="text-white">
                  Password:
              </label>
              <input type="password" name="password" id="password" value={checkUserData.password} onChange={(e)=>{
                e.preventDefault()
                setcheckUserData({...checkUserData, password:e.target.value})
              }}required/>  
              <button className="btn btn-primary mt-6" type="submit" onClick={handleSubmit}>
                {isLoading ? <RiseLoader color="#ffffff" size={10}/> : 'Submit'}
              </button>

              <div className="flex flex-row gap-1 justify-center text-sm mt-4">
              <p className="text-white">Don't have an account?</p>
              <div className="text-underline">
              <Link className="text-black"to="/blog/register">Sign up</Link>
              </div>
              </div>
            </form>
          </div>
      </div>
      </div>
    </>
  )
}

export default Login