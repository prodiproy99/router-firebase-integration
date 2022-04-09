import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase-init';
import { useNavigate, useLocation } from 'react-router-dom';

const auth = getAuth(app)

const Login = () => {
    const [signWithGoogle, user] = useSignInWithGoogle(auth);
    const location = useLocation()
    const navigate = useNavigate()

    const from = location?.state?.from?.pathname || "/";

    const handleGogleSignIn = () =>{
        signWithGoogle()
        .then(() =>{
            navigate(from, { replace: true });
        })
    }
    return (
        <div>
            <div className="google-signIn">
                <button onClick={handleGogleSignIn}>Google Sign In</button>
            </div>
            <form className='register-form'>
                Email: <input type="email" />
                <br />
                Password: <input type="password" />
                <br />
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;