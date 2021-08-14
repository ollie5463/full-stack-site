import React, { useState } from 'react';
import { Tab } from '../NavBar.style';

const Login: React.FC = () => {
    
    const [showLogin, setShowLogin] = useState(false);

    return (
        <>
            <Tab onClick={() => setShowLogin(true)}>Login</Tab>
            {
            showLogin && 
                <form>
                    <div>
                        <label htmlFor='username'><b>Username</b></label>
                        <input type='text' placeholder='Enter Username' name='username' required></input>
                        <label htmlFor='password'><b>Password</b></label>
                        <input type='password' placeholder='Enter Password' name='password' required></input>
                        <button type='submit'>Login</button>
                    </div>
                </form>
            }
            
        </>
)};

export default Login;
