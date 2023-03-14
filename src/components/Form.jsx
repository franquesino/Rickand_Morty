import { useState } from "react";
import validation from "./validation";

const Form = ({login}) => {

    const [userData, setUserData] = useState({
        username: '',
        password: ''

    })

    const [errors, setErrors] = useState({
        username: '',
        password: ''
    })

    const handleInputChange = (event) => {
        setUserData({
            ...userData,
        [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData)
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" value={userData.username} onChange={handleInputChange}/>

            <label htmlFor="password">Password:</label>
            <input type="password" name="password" value={userData.password} onChange={handleInputChange} />

            <button>LOGIN</button>

        </form>
    )
}

export default Form;