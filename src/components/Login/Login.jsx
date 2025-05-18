import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import React, {useState} from 'react';
import {auth} from '../../Firebase/Firebase.init';
const Login = () => {
  const [user, setUser] = useState(null); 
    const provider = new GoogleAuthProvider();


  const handleGoogleLogin= () => {

    console.log('Google login clicked');

    signInWithPopup(auth, provider)
    .then(result => {
      console.log(result.user);
      setUser(result.user);
      
    })
    .catch(error => {
      console.log(error);
      
    })
  
  }
    return (
        <div>
          <button onClick={handleGoogleLogin}>  Sign in With Google </button>
          {
            user && <div>
            <h3>{user.displayName}</h3>
            <p>{user.email}</p>
          </div>
          }
     
        </div>
    );
};

export default Login;