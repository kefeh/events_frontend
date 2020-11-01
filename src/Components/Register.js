import React, { useState } from 'react'
import '../Stylesheets/Assets.css'
import '../Stylesheets/Register.css'
import '../Stylesheets/AuthForm.css'
import { VisibilityRounded, VisibilityOffRounded } from '@material-ui/icons';

function Register() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="register">
            <form action="" className="auth_form">
                <div className="form-item">
                    <label>Name</label>
                    <input type="text" name="name"/>
                </div>
                <div className="form-item">
                    <label>Email</label>
                    <input type="text" name="email"/>
                </div>
                <div className="form-item">
                    <label>Password</label>
                    <input type="password" name="password"/>
                    <div onClick={() => setShowPassword(!showPassword)}>
                        {showPassword? 
                        <VisibilityRounded/>
                        : <VisibilityOffRounded/>
                        }
                    </div>
                </div>

                <div className="auth_buttons">
                    <div className="btn btn__outline">
                        <span>Cancel</span>
                    </div>
                    <div className="btn btn__primary">
                        <span>Save</span>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register
