
import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Sign.css"
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
import initialAuth from '../Firebase/InitializeFirebase';
const SignUp = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});
    initialAuth()
    const auth = getAuth();
    const userName = useRef("");
    const userEmail = useRef("");
    const userPassword = useRef("");
    const comfirmPassword = useRef("");

    const handleSignUp = (e) => {
        e.preventDefault();
        // console.log(userEmail.current.value,userPassword.current.value,comfirmPassword.current.value)
        if (userPassword.current.value === comfirmPassword.current.value) {
            createUserWithEmailAndPassword(auth, userEmail.current.value, userPassword.current.value)
                .then((userCredential) => {
                    updateUser();
                    const user = userCredential.user.email;
                    console.log(29, userCredential.user)
                    setUserData({ email: user })
                    // if (user) {console.log(JSON.stringify(user))};
                    sendEmailVari()

                    setTimeout(() => {
                        navigate(-1)

                    }, "3500")
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    alert(errorMessage)
                });

        } else {
            alert("comfirm password' must be carbon copy of your password 😅")
        }

    }

    const updateUser = () => {
        updateProfile(auth.currentUser, {
            displayName: `${userName.current.value}`
        }).then(() => {
            setUserData({ ...userData, name: auth.currentUser.displayName })
            // console.log("display name: " + auth.currentUser.displayName); 
        }).catch((error) => {
            alert(error)
        });
    }

    userData.name && console.log(userData)

    const sendEmailVari = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                alert("signup done & verify email sent")
            });
    }

    return (
        <>
            <div className=" m-auto w-100 mt-4 py-5">
                <form className="form-box m-auto d-flex flex-column justify-content-center w-25 " onSubmit={handleSignUp}>
                    <h5>
                        <p><Link to="/">Home</Link> / <Link to="/sign-up">signUp</Link> </p>
                    </h5>
                    <h3>Sign Up</h3>
                    <div className="form-group">
                        <label>Your Name</label>
                        <input ref={userName} type="text" className="form-control" placeholder="Enter name" />
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input ref={userEmail} type="email" className="form-control" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input ref={userPassword} type="password" className="form-control mb-2" placeholder="Enter password" />
                    </div>
                    <div className="form-group">
                        <label>Comfirm Password</label>
                        <input ref={comfirmPassword} type="password" className="form-control mb-2" placeholder="Enter password" />
                    </div>
                    <button className="btn btn-primary btn-block">Sign Up</button>
                    <p className="forgot-password text-right pt-2">
                        Already registered <Link to="/sign-in">sign in?</Link>
                    </p>
                </form>
            </div>
        </>
    );
};

export default SignUp;