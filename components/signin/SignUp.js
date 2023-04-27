import React from 'react';
import {Form, Formik} from "formik";
import LoginInput from "../inputs/loginInput";
import CircledIconBtn from "../buttons/circledIconBtn";
import styles from "../../styles/signin.module.scss";
import * as Yup from "yup";

const SignUp = (props) => {
    const {
        name,
        email,
        password,
        conf_password,
        success,
        error,
    } = props.user;

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
                    onSubmit={() => {
                        props.signUpHandler();
                    }}
                >
                    {(form) => (
                        <Form>
                            <LoginInput
                                type="text"
                                name="name"
                                icon="user"
                                placeholder="Full Name"
                                onChange={props.handleChange}
                            />
                            <LoginInput
                                type="text"
                                name="email"
                                icon="email"
                                placeholder="Email Address"
                                onChange={props.handleChange}
                            />
                            <LoginInput
                                type="password"
                                name="password"
                                icon="password"
                                placeholder="Password"
                                onChange={props.handleChange}
                            />
                            <LoginInput
                                type="password"
                                name="conf_password"
                                icon="password"
                                placeholder="Re-Type Password"
                                onChange={props.handleChange}
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

export default SignUp;