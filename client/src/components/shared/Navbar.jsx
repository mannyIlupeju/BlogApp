import React, {useState, useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom'



function Navbar(token) {
  const [isLogin, setisLogin] = useState(false)
  
  useEffect(()=>{
    if(token) {
      setisLogin(true)
    }
  },[token])

  console.log(isLogin)


  const logOut = () => {
    
  }




  return (
    <>
      <div className="container-flex flex justify-between bg-zinc-400 text-slate-900 p-5">
        <div className="pl-10">
          <Link to='/'>Memory Blog</Link>
        </div>
        <nav>
          <ul className="flex flex-row gap-10">
            <Link to='/blog/form'>Form</Link>
            {isLogin ? <a onClick={logOut} className="cursor-pointer">Logout</a>:  <Link to='/blog/signin'>Sign Up/Sign In</Link>}
          
            
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar