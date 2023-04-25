import {useState} from "react";
import {Formik, Form} from "formik";
import * as Yup from "yup";
import Link from "next/link";
import {
    getCsrfToken,
    getProviders,
    getSession,
    signIn,
    // country,
} from "next-auth/react";
import styles from "../styles/signin.module.scss";
import Header from "../components/header";
import Footer from "../components/footer";
import LoginInput from "../components/inputs/loginInput";
import CircledIconBtn from "../components/buttons/circledIconBtn";
import {BiLeftArrowAlt} from "react-icons/bi";

const country = {
    name: "United State",
    flag: "https://www.seekpng.com/png/full/3-34817_picture-download-american-flag-clipart-no-background-transparent.png",
};

const initialvalues = {
    login_email: "",
    login_password: "",
    name: "",
    email: "",
    password: "",
    conf_password: "",
    success: "",
    error: "",
    login_error: "",
};

export default function signin({providers, callbackUrl, csrfToken}) {
    console.log(providers)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [user, setUser] = useState(initialvalues);
    const {
        login_email,
        login_password,
        name,
        email,
        password,
        conf_password,
        success,
        error,
        login_error,
    } = user;
    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    };

    const loginValidation = Yup.object({
        login_email: Yup.string()
            .required("Email address is required.")
            .email("Please enter a valid email address."),
        login_password: Yup.string().required("Please enter a password"),
    });

    return (
        <>
            <Header country={country}/>
            <div className={styles.login}>
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
                                    <LoginInput
                                        type="password"
                                        name="conf_password"
                                        icon="password"
                                        placeholder="Re-Type Password"
                                        onChange={handleChange}
                                    />

                                    <CircledIconBtn type="submit" text="Sign up"/>

                                    <div className={styles.forgot}>
                                        <Link href="/auth/forgot">Forgot password ?</Link>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                        <div className={styles.login__socials}>
                            <span className={styles.or}>Or continue with</span>
                            <div className={styles.login__socials_wrap}>
                                {providers.map((provider) => {
                                    if (provider.name == "Credentials") {
                                        return;
                                    }
                                    return (
                                        <div key={provider.name}>
                                            <button
                                                className={styles.social__btn}
                                                onClick={() => signIn(provider.id)}
                                            >
                                                <img src={`../../icons/${provider.name}.png`} alt="" />
                                                Sign in with {provider.name}
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>



                    </div>
                </div>
            </div>
            <Footer country={country}/>
        </>
    );
};


export async function getServerSideProps(context) {
    const providers =  Object.values(await getProviders());
    return {
        props: {providers},
    }


    // const {req, query} = context;
    //
    // const session = await getSession({req});
    // const {callbackUrl} = query;
    //
    // if (session) {
    //     return {
    //         redirect: {
    //             destination: callbackUrl,
    //         },
    //     };
    // }
    // const csrfToken = await getCsrfToken(context);
    // const providers = Object.values(await getProviders());
    // return {
    //     props: {
    //         providers,
    //         csrfToken,
    //         callbackUrl,
    //     },
    // };
}
