import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { loginPost } from '../../actions/authPosts'




const Login = ({isLogin, setisLogin}) => {
  const [message, setMessage] = useState(false)
  const [checkUserData, setcheckUserData] = useState({email: '', password: ''})
  const dispatch = useDispatch()

  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(loginPost(checkUserData))

    loginfunctionality()
  }

  const clearLogin= () => {
    setcheckUserData({name: '', email: '', password:''})
  }

  function loginfunctionality () {
    const token = localStorage.getItem("token")
    console.log(token)
    {token ? setisLogin(true) : <p>Not logged in</p>}

    setMessage(true)

    setTimeout(() => {
      clearLogin()
      setMessage(false)
    }, 2000);


  }
  



  return (
    <>
    <div className="flex justify-center mx-auto mt-20 h-screen">
      <div className="bg-white h-fit p-12 w-96">
        <div className="text-center mb-4">
          <h1 className="uppercase text-2xl text-slate-900">Login</h1>
        </div>
        {message && 
          <div className="text-center mb-4 bg-slate-800 p-4 w-fit mx-auto">
            <h4>User is now Logged in</h4>
          </div>
        }
          <div>
            <form className="flex flex-col gap-3">
              <label htmlFor="email">
                  Email:
              </label>
              <input type="text" name="email" id="email" value={checkUserData.email} onChange={(e)=>{
                e.preventDefault()
                setcheckUserData({...checkUserData, email:e.target.value})
              }}required/>
              <label htmlFor="password">
                  Password:
              </label>
              <input type="text" name="password" id="password" value={checkUserData.password} onChange={(e)=>{
                e.preventDefault()
                setcheckUserData({...checkUserData, password:e.target.value})
              }}required/>  
              <button className="btn mt-6" type="submit" onClick={handleSubmit}>Submit</button>
            </form>
          </div>
      </div>
      </div>
    </>
  )
}

export default Login