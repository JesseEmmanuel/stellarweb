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
    const [ user, setUser ] = useState(localStorage.getItem('user'))
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

    // useEffect(() => {
    //     // localStorage.setItem('token', JSON.stringify(token))
    //     localStorage.setItem('token', token)
    // }, [token])

    useEffect(() => {
        // localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', token)
        localStorage.setItem('user', user)
    }, [token,user])

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
            setFormData({
                email: '',
                password: ''
            })
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
