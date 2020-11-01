import React from 'react'
import '../Stylesheets/Assets.css'
import '../Stylesheets/Login.css'
import '../Stylesheets/AuthForm.css'

function Login() {
    return (
        <div className="login">
            <form action="" className="auth_form">
                <div className="form-item">
                    <label>Email</label>
                    <input type="text" name="email"/>
                </div>
                <div className="form-item">
                    <label>Password</label>
                    <input type="password" name="password"/>
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

export default Login
