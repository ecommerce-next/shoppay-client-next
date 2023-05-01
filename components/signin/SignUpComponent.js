import React, {useState} from 'react';
import {Form, Formik} from "formik";
import LoginInput from "../inputs/loginInput";
import CircledIconBtn from "../buttons/circledIconBtn";
import styles from "../../styles/signin.module.scss";
import * as Yup from "yup";
import {signIn} from "next-auth/react";
import Router from "next/router";
import axios from "axios";
import DotLoaderSpinner from "../loaders/dotLoader";
// import {useDispatch, useSelector} from "react-redux";

const SignUpComponent = ({user, setUser, handleChange, setLoading}) => {
    // const {user} = useSelector((state) => ({...state}));
    // const dispatch = useDispatch()

    const {
        name,
        email,
        password,
        conf_password,
        success,
        error,
    } = user;


    const signUpHandler = async (e) => {
        try {
            setLoading(true);
            const {data} = await axios.post("/api/auth/signup", {
                name,
                email,
                password,
            });

            // dispatch({...user,  error: "", success: data.message });
            setUser({...user, error: "", success: data.message});
            setLoading(false);

            setTimeout(async () => {
                let options = {
                    redirect: false,
                    email: email,
                    password: password,
                };

                const res = await signIn("credentials", options);
                await Router.push("/");
            }, 2000);

        } catch (error) {
            setLoading(false);
            //dispatch({...user,  success: "", error: error.response.data.message });
            setUser({...user, success: "", error: error.response.data.message});
        }
    };


    const registerValidation = Yup.object({
        name: Yup.string()
            .required("What's your name ?")
            .min(2, "First name must be between 2 and 16 characters.")
            .max(16, "First name must be between 2 and 16 characters.")
            .matches(/^[aA-zZ]/, "Numbers and special characters are not allowed."),
        email: Yup.string()
            .required(
                "You'll need this when you log in and if you ever need to reset your password."
            )
            .email("Enter a valid email address."),
        password: Yup.string()
            .required(
                "Enter a combination of at least six numbers,letters and punctuation marks(such as ! and &)."
            )
            .min(6, "Password must be atleast 6 characters.")
            .max(36, "Password can't be more than 36 characters"),
        conf_password: Yup.string()
            .required("Confirm your password.")
            .oneOf([Yup.ref("password")], "Passwords must match."),
    });

    return (
        <div className={styles.login__container}>
            <div className={styles.login__form}>
                <h1>Sign up</h1>
                <p>
                    Get access to one of the best Eshopping services in the world.
                </p>
                <Formik
                    enableReinitialize
                    initialValues={{
                        name,
                        email,
                        password,
                        conf_password,
                    }}
                    validationSchema={registerValidation}
                    onSubmit={async () => {
                        await signUpHandler();
                    }}
                >
                    {(form) => (
                        <Form>
                            <LoginInput
                                type="text"
                                name="name"
                                icon="user"
                                placeholder="Full Name"
                                onChange={handleChange}
                            />
                            <LoginInput
                                type="text"
                                name="email"
                                icon="email"
                                placeholder="Email Address"
                                onChange={handleChange}
                            />
                            <LoginInput
                                type="password"
                                name="password"
                                icon="password"
                                placeholder="Password"
                                onChange={handleChange}
                            />
                            <LoginInput
                                type="password"
                                name="conf_password"
                                icon="password"
                                placeholder="Re-Type Password"
                                onChange={handleChange}
                            />
                            <CircledIconBtn type="submit" text="Sign up"/>
                        </Form>
                    )}
                </Formik>
                <div>
                    {success && <span className={styles.success}>{success}</span>}
                </div>
                <div>{error && <span className={styles.error}>{error}</span>}</div>
            </div>
        </div>
    );
};

export default SignUpComponent;