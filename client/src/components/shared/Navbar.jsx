import React, {useState, useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom'



function Navbar({isLogin, setisLogin}) {

  //LogOut functionality
  const logOut = () => {
    setisLogin(false)
    localStorage.clear()
  }



  return (
    <>
      <div className="container-flex flex justify-between bg-zinc-400 text-slate-900 p-5 nav-background">
        <div className="pl-10 mx-auto font-semibold text-3xl flex">
          <Link to='/'><img src = '/images/memoryblog.png' className="brandlogo" alt="memory logo"/></Link>
          <Link to='/'>Memory Blog</Link>
        </div>
        <nav>
          <ul className="flex flex-row gap-10">
            {isLogin ?  <Link to='/blog/form'>Form</Link> : null}
            {isLogin ? <a onClick={logOut} className="cursor-pointer">Logout</a> : <Link to='/blog/signin'>Sign Up/Sign In</Link> }
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar