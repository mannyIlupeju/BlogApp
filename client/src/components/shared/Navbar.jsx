import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <>
      <div className="container-flex flex justify-between bg-zinc-400 text-slate-900 p-5">
        <div className="pl-10">
          <Link to='/'>Memory Blog</Link>
        </div>
        <nav>
          <ul className="flex flex-row gap-10">
            <Link to='/form'>Form</Link>
            <li>Login</li>
            <li></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar