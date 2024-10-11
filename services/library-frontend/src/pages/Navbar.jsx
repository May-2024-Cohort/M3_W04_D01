import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'



function Navbar() {


    const {loggedInUser, isLoggedIn,logOutUser} = useContext(AuthContext)
    console.log(loggedInUser)
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">

        <ul>
            {isLoggedIn && (
                <div>
                     <Link to={'/books'}><li>All Books</li></Link>
                     <Link to={'/books/create'}><li>Create a book</li></Link>
                     <li>You are logged in as: {loggedInUser?.name} </li>
                     <li onClick={()=>{logOutUser()}}>Logout </li>


                </div>

            )}

            {!isLoggedIn && (
                 <div>
                 <Link to={'/login'}><li>Login</li></Link>
                 <Link to={'/signup'}><li>Signup</li></Link>
                 <li>Currently Not Logged in</li>

            </div>

            )}
           
        </ul>
    </nav>

  )
}

export default Navbar
