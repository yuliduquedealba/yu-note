import React from 'react';
import { useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "../firebase/firebaseImport";
import auth from "../firebase/firebaseConfig.js"
import '../styles/login.css'

const Login = () => {
  const navigate = useNavigate();
    const loginWithGoogle = () => {
      const provider = new GoogleAuthProvider();
      return signInWithPopup(auth, provider)
      .then(() => {
        navigate('/Notes');
      }).catch((error) => {
        console.error(error)
      });
    }
    return (
      <>
        <section className="title">
          <h1>Yu-Note</h1>
        </section>
        <section className='text'>
          <p>The perfect App to write down what you want</p>
        </section>
        <button className="login-btn login-google" onClick={loginWithGoogle}>
          Login with Google
        </button>
      </>
      );
}
    
export default Login;