import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'
import authService from '../services/auth.service'


function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const {authenticateUser} = useContext(AuthContext)

    function handleSubmit(e) {
        e.preventDefault()

        let loginInformation = {email,password}

        authService.login(loginInformation)
        .then((token)=>{
            console.log(token.data)
            localStorage.setItem("token",token.data.authToken)
            authenticateUser()
            navigate('/books')
        })



    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>

                <label>
                    Email:
                    <input onChange={(e) => { setEmail(e.target.value) }} type="text" />
                </label>

                <label>
                    Password:
                    <input onChange={(e) => { setPassword(e.target.value) }} type="password" />
                </label>
                <button>Login</button>
            </form>

        </div>
    )
}

export default LoginPage
