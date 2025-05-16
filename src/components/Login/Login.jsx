import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
const Login = () => {

  const provider = new GoogleAuthProvider();

  const handleGoogleLogin= () => {
    console.log('Google login clicked');

    signInWithPopup()
    .then(result => {
      console.log(result);
      
    })     
    .catch(error => {
      console.error(error);
    })
  }
    return (
        <div>
          <button onClick={handleGoogleLogin}>  Sign in With Google </button>
     
        </div>
    );
};

export default Login;