import React from 'react';
import {Form, Formik} from "formik";
import LoginInput from "../inputs/loginInput";
import CircledIconBtn from "../buttons/circledIconBtn";
import styles from "../../styles/signin.module.scss";

const EmailSignUp = (props) => {
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
                        name: props.user.name,
                        email: props.user.email,
                        password: props.user.password,
                        conf_password: props.user.conf_password
                    }}
                    validationSchema={props.registerValidation}
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
                    {props.user.success && <span className={styles.success}>{props.user.success}</span>}
                </div>
                <div>{props.user.error && <span className={styles.error}>{props.user.error}</span>}</div>
            </div>
        </div>
    );
};

export default EmailSignUp;