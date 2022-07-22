import React, { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Sign.css"
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail, signInWithPopup, GoogleAuthProvider, sendEmailVerification } from "firebase/auth";
import initialAuth from '../Firebase/InitializeFirebase';

import { userContext } from '../../Context/Context';
import { useLocation } from 'react-router-dom';
const SignIn = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const navigate = useNavigate();
    const location = useLocation();
    const [userData, setUserData] = useState({});
    initialAuth()
    const auth = getAuth();
    const userEmail = useRef("");
    const userPassword = useRef("");
    const handleSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, userEmail.current.value, userPassword.current.value)
            .then((userCredential) => {
                // Signed in 
                const { email, displayName, emailVerified } = userCredential.user;

                if (emailVerified) {
                    localStorage.setItem('authUser', JSON.stringify({ email, displayName }))
                    setUserData({ email, displayName, emailVerified });

                    setLoggedInUser({ email, displayName })
                    // ...
                    alert("signIn successful")
                    if (location.state?.from) {
                        navigate(location.state.from);
                    } else {
                        navigate('/');
                    }
                } else {
                    alert(" verify your email ")
                }

            })
            .catch((error) => {
                alert(error.message)
            });

    }
    // console.log(userData.displayName)

    const handleForgetPassword = () => {
        sendPasswordResetEmail(auth, userEmail.current.value)
            .then(() => {
                alert("Password reset email sent!")
            })
            .catch((error) => {
                alert(error.message)
            });
    }

    // signin with google . 
    const provider = new GoogleAuthProvider();

    const handleGoogleSignin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user.providerData[0];
                const { email, displayName } = user;
                setLoggedInUser({ email, displayName })
            }).catch((error) => {
                const errorMessage = error.message;
                errorMessage && alert(errorMessage);
            });
    }
    const sendEmailVari = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                alert("verify email sent")
            });
    }
    return (
        <>
            <div className=" m-auto w-100 py-5">

                <form className="form-box m-auto d-flex flex-column justify-content-center w-25 " onSubmit={handleSignIn}>
                    <h5>
                        <p><Link to="/">Home</Link> / <Link to="/sign-in">signIn</Link> </p>
                    </h5>
                    <h3>Sign In</h3>
                    <div className="form-group">
                        <label>Email address</label>
                        <input ref={userEmail} type="email" className="form-control" placeholder="Enter email" autoFocus={true} />
                    </div>
                    <div className="form-group mb-2">
                        <label>Password</label>
                        <input ref={userPassword} type="password" className="form-control" placeholder="Enter password" />
                    </div>
                    <button className="btn btn-primary btn-block">Sign-In</button>
                    <p onClick={handleForgetPassword} className="forgot-password text-right py-1 text-danger" style={{ cursor: 'pointer', textDecoration: "underLine" }}>Forgot password?</p>
                    <button className="btn btn-primary btn-block" onClick={sendEmailVari}>send verification</button>

                    <p>New there ? sign up first  <Link to="/sign-up">Sign Up</Link> </p>
                    <p>or</p>
                    <button className="btn btn-primary btn-block" onClick={handleGoogleSignin}> Sign-In with Google </button>
                </form>
            </div>
        </>
    );
};

export default SignIn;