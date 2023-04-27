import React from 'react';
import {Form, Formik} from "formik";
import LoginInput from "../inputs/loginInput";
import CircledIconBtn from "../buttons/circledIconBtn";
import styles from "../../styles/signin.module.scss";
import Link from "next/link";
import SocialSignIn from "./SocialSignIn";
import {BiLeftArrowAlt} from "react-icons/bi";

const EmailSignIn = (props) => {
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
                        login_email: props.login_email,
                        login_password: props.login_password,
                    }}
                    validationSchema={props.loginValidation}
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

export default EmailSignIn;