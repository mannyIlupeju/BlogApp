import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { loginPost } from '../../actions/authPosts'




const Login = (token) => {
  
  const [checkUserData, setcheckUserData] = useState({email: '', password: ''})
  const dispatch = useDispatch()


  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(loginPost(checkUserData))
  }
  



  return (
    <>
      <div className="container w-96 mx-auto mt-20 bg-white p-12">
        <div className="text-center mb-8">
          <h1 className="uppercase text-2xl text-slate-900">Login</h1>
        </div>
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
    </>
  )
}

export default Login