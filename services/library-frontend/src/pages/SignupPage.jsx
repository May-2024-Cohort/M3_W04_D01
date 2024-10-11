import {useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import authService from '../services/auth.service'



function SignupPage() {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [name,setName] = useState("")

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()

        let newUser = {email,password,name}

        // axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/signup`,newUser)
        
        authService.signup(newUser)
        .then((createdUser)=>{
           navigate('/login')
        })

    }
  return (
    <div>

        <form onSubmit={handleSubmit}>

            <label>
                Email:
                <input onChange={(e)=>{setEmail(e.target.value)}} type="text" />
            </label>

            <label>
                Password:
                <input onChange={(e)=>{setPassword(e.target.value)}} type="password" />
            </label>
            <label>
                Name:
                <input onChange={(e)=>{setName(e.target.value)}} type="text" />
            </label>

            <button>Sing up</button>
        </form>

      
    </div>
  )
}

export default SignupPage
