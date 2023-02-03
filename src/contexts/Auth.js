import { useContext, createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [ token, setToken ] = useState(localStorage.getItem('token'))
    // const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('user')))
    const [ user, setUser ] = useState(localStorage.getItem('user'))
    // const [ error, setError ] = useState([]);
    const navigate = useNavigate()
    const [message, setMessage] = useState([])
    const [error, setError] = useState([])
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value });
    }

    useEffect(() => {
        localStorage.setItem('token', token)
    }, [token])

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])

    const signUp = (data) => {
        console.log(data)
    }

    const signIn = async (e) => 
    {
        e.preventDefault();
        try{
            const read = await axios.post(`${process.env.REACT_APP_API_URL}/authenticate`, formData);
            setToken(read.data.token)
            setUser(read.data.user)
            navigate('/Dashboard')
        }
        catch(e) {
            if(e.response.status === 400){
                setError(e.response.data.error)
                setMessage(e.response.data.message)
                toast.error(e.response.data.message)
            }
            if(e.response.status === 401){
                setMessage(e.response.data.message)
                toast.error(e.response.data.message)
            }
        }
        // try 
        // {
        //     const response = await fetch(`${process.env.REACT_APP_API_URL}/authenticate`, {
        //         method:'POST',
        //         headers: {
        //             'Content-type': 'application/json',
        //         },
        //         body: JSON.stringify(data), 
        //     })
        //     const { token, user } = await response.json()
        //     setToken(token)
        //     setUser(user)
        // }
        // catch(error)
        // {
        //     console.log(error)
        // }
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
        onChange,
        formData,
        error,
        message,
    }
    return <AuthContext.Provider value={value}>{ children }</AuthContext.Provider> 
}
