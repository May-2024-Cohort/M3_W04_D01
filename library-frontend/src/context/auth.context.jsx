
// creating the context

import { createContext, useEffect, useState } from "react";
import AllBooksPage from "../pages/AllBooksPage";
import axios from "axios";
import authService from "../services/auth.service";


const AuthContext = createContext()


// context provider

function AuthContextProvider(props){

    const [loggedInUser,setLoggedInUser] = useState(null)
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const [isLoading,setIsLoading] = useState(true)

    function authenticateUser(){

        // 1. get the token from localstorage

        const token = localStorage.getItem("token")

        // 2. send the token to the verify route

        if(token){
            authService.verify()
            .then((userInformation)=>{
            // 3. save the information in the context

                setLoggedInUser(userInformation.data)
                setIsLoading(false)
                setIsLoggedIn(true)
            })
            .catch(()=>{
                setIsLoading(false)
                setIsLoggedIn(false)
                setLoggedInUser(null)
            })
        }
        else{
            setIsLoading(false)
            setIsLoggedIn(false)
            setLoggedInUser(null)
        }
    }


    function logOutUser(){

        localStorage.removeItem("token")
        authenticateUser()

    }

    useEffect(()=>{
        authenticateUser()
    },[])


    return(
        <AuthContext.Provider value={{loggedInUser,isLoading,isLoggedIn, authenticateUser,logOutUser}}>

           {props.children}

        </AuthContext.Provider>
    )
}

export {AuthContextProvider, AuthContext }
