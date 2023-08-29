
import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid"

function Login () {
    const initialValues = { username:"", email:"", password:""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] =useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
        }
    },[formErrors]) 

    const validate = (values) =>{
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$1/;
        if (!values.username) {
            errors.username = "username is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "password is required!";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }

        return errors;
    };
    return (
        <div className="container">
            {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className="ui message success">Sign In Successfully</div>
            ) : (
                <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
            
                )}

            <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
            <form onSubmit={handleSubmit}>
                <h1>Login Form</h1>
                <div className="ui divider"></div>
                <div className="ui form">
                    <div className="field">
                        <label>Username</label>
                        <input type="text" 
                        name="username" 
                        placeholder="Username"
                        value={formValues.username}></input>
                    </div>
                    <p>{ formErrors.username}</p>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" 
                        name="email" 
                        placeholder="Email"
                        value={formValues.email}></input>
                    </div>
                    <p>{ formErrors.email}</p>
                    <div className="field">
                        <label>Password</label>
                        <input type="text" 
                        name="password" 
                        placeholder="Password"
                        value={formValues.password}></input>
                    </div>
                    <p>{ formErrors.password}</p>
                </div>
            </form>
        </div>
    )
}

export default Login;