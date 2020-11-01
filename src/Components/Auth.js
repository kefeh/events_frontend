import React from 'react'
import { useStateValue } from '../Data/StateProvider';
import '../Stylesheets/Auth.css'
import Login from './Login';
import Register from './Register';

function Auth() {
    const [{showRegister}, dispatch] = useStateValue();

    const setRegister = () => {
        dispatch({
            item: !showRegister,
            type: "SHOW_REGISTER"
        })
    }

    return (
        <div className="auth">
        {
            typeof(showRegister) === 'undefined' || showRegister === false ? (
                <Login/>
            ):<Register/>
        }

            <div className="signup">{showRegister?'Already registered':'Dont have an account'} ?
                <span onClick={setRegister}>{showRegister?' signin':' signup'}</span>
            </div>
            
        </div>
    )
}

export default Auth
