import React from 'react';
import './Signup.css';


function Signup() {
    return (
        <div className="Signup">
            <h1>SIGN UP</h1>            
            <div className="box">
            <input type="text" className="input" placeholder="USERNAME" />
            <input type="password" className="pass" placeholder="PASSWORD" />
            </div>
        </div>
    );
}

export default Signup;
