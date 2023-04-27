import React from 'react';
import {Form, Formik} from "formik";
import LoginInput from "../inputs/loginInput";
import CircledIconBtn from "../buttons/circledIconBtn";
import styles from "../../styles/signin.module.scss";
import Link from "next/link";
import SocialSignIn from "./SocialSignIn";
import {BiLeftArrowAlt} from "react-icons/bi";
import * as Yup from "yup";

const SignIn = (props) => {
    const {
        login_email,
        login_password,
    } = props.user;

    const loginValidation = Yup.object({
        login_email: Yup.string()
            .required("Email address is required.")
            .email("Please enter a valid email address."),
        login_password: Yup.string().required("Please enter a password"),
    });


    return (
        <div className={styles.login__container}>
            <div className={styles.login__header}>
                <div className={styles.back__svg}>
                    <BiLeftArrowAlt/>
                </div>
                <span>
                            We&apos;d be happy to join us! <Link href="/">Go Store</Link>
                        </span>
            </div>

            <div className={styles.login__form}>
                <h1>Sign in</h1>
                <p>
                    Get access to one of the best Eshopping services in the world.
                </p>
                <Formik
                    enableReinitialize
                    initialValues={{
                        login_email,
                        login_password,
                    }}
                    validationSchema={loginValidation}
                    onSubmit={() => {
                        props.signInHandler();
                    }}
                >
                    {(form) => (
                        <Form>
                            <LoginInput
                                type="text"
                                name="login_email"
                                icon="email"
                                placeholder="Email Address"
                                onChange={props.handleChange}
                            />
                            <LoginInput
                                type="password"
                                name="login_password"
                                icon="password"
                                placeholder="Password"
                                onChange={props.handleChange}
                            />
                            <CircledIconBtn type="submit" text="Sign in"/>

                            <div className={styles.forgot}>
                                <Link href="/auth/forgot">Forgot password ?</Link>
                            </div>
                        </Form>
                    )}
                </Formik>
                <SocialSignIn providers={props.providers}/>
            </div>
        </div>
    );
};

export default SignIn;