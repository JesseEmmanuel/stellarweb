import { createContext, useState } from "react";
import axios from "axios";
import { useAuth } from "./Auth";

const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const {token}  = useAuth();

    const [formValues, setFormValues] = useState({
        activationCode:"",
        firstName: "",
        middleName: "",
        lastName: "",
        date_of_birth: "",
        contactInfo: "",
        email: ""
    })

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormValues({...formValues, [name]: value });
    }

    const [users, setUsers] = useState([]);
    const [errors, setErrors] = useState({})
    // const [user, setUser] = useState([]);

    const getUsers = async () => {
        const apiUsers = await axios.get(`${process.env.REACT_APP_API_URL}/view`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
        setUsers(apiUsers.data.referrals);
    };

    const addUser = async (e) => {
        e.preventDefault();
        try{
            await axios.post(`${process.env.REACT_APP_API_URL}/addUser`, formValues, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            getUsers();
        }
        catch(errors){
            if(errors.response.status === 400){
                setErrors(errors.response.data.message);
            }
        }
    }

    return <UserContext.Provider 
    value=
    {{ 
        users, 
        getUsers, 
        onChange, 
        formValues, 
        addUser,
        errors 
    }}>
    { children }</UserContext.Provider>
}

export default UserContext; 