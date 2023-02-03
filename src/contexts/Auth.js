import { useContext, createContext, useState, useEffect } from 'react'
// import axios from 'axios'

const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [ token, setToken ] = useState(localStorage.getItem('token'))
    // const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('user')))
    const [ user, setUser ] = useState(localStorage.getItem('user'))
    // const [ error, setError ] = useState([]);

    useEffect(() => {
        localStorage.setItem('token', token)
    }, [token])

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])

    const signUp = (data) => {
        console.log(data)
    }

    const signIn = async (data) => 
    {
        try 
        {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/authenticate`, {
                method:'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data), 
            })
            const { token, user } = await response.json()
            setToken(token)
            setUser(user)
        }
        catch(error)
        {
            console.log(error)
        }
    }

    const signOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    } 

    const value = {
        signUp,
        signIn,
        signOut,
        token,
        user,
    }
    return <AuthContext.Provider value={value}>{ children }</AuthContext.Provider> 
}
