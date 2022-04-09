import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <div>
            <div className="google-signIn">
                <button>Google Sign In</button>
            </div>
            <form className='register-form'>
                Name: <input type="text" />
                <br />
                Email: <input type="email" />
                <br />
                <button>Register</button>
            </form>
        </div>
    );
};

export default Register;