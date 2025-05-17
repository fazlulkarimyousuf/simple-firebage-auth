import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {auth} from '../../Firebase/Firebase.init';
const Login = () => {

  const provider = new GoogleAuthProvider();

  const handleGoogleLogin= () => {
    console.log('Google login clicked');

    signInWithPopup(auth, provider)
    .then(result => {
      console.log(result);
      
    })     
    .catch(error => {
  console.error('Google Sign-In Error:', error);
});
  }
    return (
        <div>
          <button onClick={handleGoogleLogin}>  Sign in With Google </button>
     
        </div>
    );
};

export default Login;