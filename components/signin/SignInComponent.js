import {Form, Formik} from "formik";
import LoginInput from "../inputs/loginInput";
import CircledIconBtn from "../buttons/circledIconBtn";
import styles from "../../styles/signin.module.scss";
import Link from "next/link";
import SocialSignIn from "./SocialSignIn";
import {BiLeftArrowAlt} from "react-icons/bi";
import * as Yup from "yup";
import {signIn} from "next-auth/react";
import Router from "next/router";

const SignInComponent = ({user, setUser, handleChange, providers, setLoading, callbackUrl, csrfToken}) => {
    const {
        login_email,
        login_password,
        login_error
    } = user;

    const signInHandler = async () => {
        setLoading(true);
        let options = {
            redirect: false,
            email: login_email,
            password: login_password,
        };

        const res = await signIn("credentials", options);

        setUser({...user, success: "", error: ""});
        setLoading(false);

        if (res?.error) {
            setLoading(false);
            setUser({...user, login_error: res?.error});
        } else {
            return Router.push(callbackUrl || "/");
        }
    };

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
                <span>We&apos;d be happy to join us! <Link href="/">Go Store</Link></span>
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
                    onSubmit={async () => {
                        await signInHandler();
                    }}
                >
                    {(form) => (
                        <Form method="post" action="/api/auth/signin/email">
                            <input
                                type="hidden"
                                name="csrfToken"
                                defaultValue={csrfToken}
                            />

                            <LoginInput
                                type="text"
                                name="login_email"
                                icon="email"
                                placeholder="Email Address"
                                onChange={handleChange}
                            />
                            <LoginInput
                                type="password"
                                name="login_password"
                                icon="password"
                                placeholder="Password"
                                onChange={handleChange}
                            />
                            <CircledIconBtn type="submit" text="Sign in"/>

                            {login_error && (
                                <span className={styles.error}>{login_error}</span>
                            )}

                            <div className={styles.forgot}>
                                <Link href="/auth/forgot">Forgot password ?</Link>
                            </div>
                        </Form>
                    )}
                </Formik>
                <SocialSignIn providers={providers}/>
            </div>
        </div>
    );
};

export default SignInComponent;
