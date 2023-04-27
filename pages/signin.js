import {useState} from "react";
import * as Yup from "yup";
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
import SignIn from "../components/signin/SignIn";
import SignUp from "../components/signin/SignUp";

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

export default function signin({providers}) {
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

    const registerValidation = Yup.object({});

    const signInHandler = async (e) => {

    };

    const signUpHandler = async (e) => {

    };

    return (
        <>
            <Header country={country}/>
            <div className={styles.login}>
                <SignIn
                    loginValidation={loginValidation}
                    login_email={login_email}
                    login_password={login_password}
                    handleChange={handleChange}
                    signInHandler={signInHandler}
                    providers={providers}
                />
                <SignUp
                    registerValidation={registerValidation}
                    user={user}
                    signUpHandler={signUpHandler}
                    handleChange={handleChange}
                />
            </div>
            <Footer country={country}/>
        </>
    );
};


export async function getServerSideProps(context) {
    const providers = Object.values(await getProviders());
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
