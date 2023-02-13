import React from 'react'
import { Link } from 'react-router-dom'
const SignIn = () => {
  return (
    <>
    <div className="container mx-auto card w-fit p-12 mt-20 ">
      <div className="mb-12 text-5xl">
        <h1>Happening now</h1>
      </div>
      <div className="mb-12">
        <p>Join Memory Blog Today</p>
      </div>
      <div className="flex flex-col gap-4">
        <Link to= '/blog/register' className="btn btn-primary">Sign Up</Link>
        <Link to= '/blog/login'  className="btn btn-primary">Log in</Link>
      </div>
    </div>
    </>
  )
}

export default SignIn