import { useState } from "react";
import { actionCodeSettings, auth, gProvider } from "../config/firebase";
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import {motion} from 'framer-motion'
import { FirebaseError } from "firebase/app";

function RegisterPage() {
    // For sign In form
    const [email_1, setEmail_1] = useState("");
    const [password_1, setPassword_1] = useState("");

    // For Register Form
    const [display_name, setDisplayName] = useState("")
    const [email_2, setEmail_2] = useState("");
    const [password_2, setPassword_2] = useState("");

    // For password reset form
    const [email_3, setEmail_3] = useState("")

    const signIn = async () => {
        try {
            await signInWithEmailAndPassword(auth ,email_1, password_1).then(() => {console.log("Logged in as " + auth.currentUser?.email)  })
        } catch (error) {
            if (error instanceof FirebaseError) {
                switch (error.code) {
                    case "auth/user-not-found":
                        alert("User not found")
                        break
                    case "auth/invalid-credential":
                        alert("Invalid credential")
                        break
                    case "auth/internal-error":
                        alert("Internal error")
                        break               
                }
            }
        }
    }
    const signUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth ,email_2, password_2).then(()=> {
              console.log("User created " + auth.currentUser?.email);
              if (auth.currentUser)
                  updateProfile(auth.currentUser, {displayName: display_name})
               })
        } catch (error) {
            console.log(error)
        }
    }
    
    const signInGoogle = async() => {
        try {
            await signInWithPopup(auth, gProvider)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
            <div className="auth-holder">
                <div className="row mt-5 w-25 other-providers mx-auto text-center">
                    <h4>Continue with</h4>
                    <button className="btn btn-light w-25 mx-auto" onClick={signInGoogle}>
                        Google
                    </button>
                </div>
                <div className="row mt-5 w-25 mx-auto">
                    <div className="col">
                        <h3>Login</h3>
                        <div>
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                >
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    onChange={(e) => setEmail_1(e.target.value)}
                                />
                                <div id="emailHelp" className="form-text">
                                    We'll never share your email with anyone
                                    else.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleInputPassword1"
                                    className="form-label"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    onChange={(e) => {setPassword_1(e.target.value)}}
                                />
                            </div>
                            {/* <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                        />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Check me out
                        </label>
                    </div> */}
                            <button className="btn btn-outline-warning" onClick={signIn}>
                                Sign In
                            </button>
                            <button type="button" className="btn text-primary" data-bs-toggle="modal" data-bs-target="#forgotPasssword">
                              Forgot Password
                            </button>

                            <div className="modal fade" id="forgotPasssword" tabIndex={-1} aria-labelledby="forgotPassswordLabel" aria-hidden="true">
                              <div className="modal-dialog ">
                                <div className="modal-content bg-dark">
                                  <div className="modal-body">
                                  <label
                                      htmlFor="exampleInputEmail1"
                                      className="form-label"
                                  >
                                      Enter your email
                                  </label>
                                  <input
                                      type="email"
                                      className="form-control"
                                      id="exampleInputEmail1"
                                      aria-describedby="emailHelp"
                                      onChange={(e) => setEmail_3(e.target.value)}
                                  />                    
                                    </div>
                                  <div className="modal-footer">
                                    <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-outline-warning" onClick={() => sendPasswordResetEmail(auth, email_3, actionCodeSettings)}>Reset Password</button>
                                  </div>
                                </div>
                              </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row mt-5 w-25 mx-auto">
                    <div className="col">
                        <h3>Register</h3>
                        <div>
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleInputUsername"
                                    className="form-label"
                                >
                                    Username
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputUsername"
                                    onChange={(e) => setDisplayName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleInputEmail1"
                                    className="form-label"
                                >
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    onChange={(e) => setEmail_2(e.target.value)}
                                />
                                <div id="emailHelp" className="form-text">
                                    We'll never share your email with anyone
                                    else.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleInputPassword1"
                                    className="form-label"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    onChange={(e) => setPassword_2(e.target.value)}

                                />
                            </div>
                            {/* <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                        />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Check me out
                        </label>
                    </div> */}
                            <button
                                className="btn btn-outline-warning"
                                onClick={signUp}
                            >
                                Register
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    );
}

export default RegisterPage;
