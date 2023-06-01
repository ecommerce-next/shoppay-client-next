import React, {useState} from "react";
import {
    getCsrfToken,
    getProviders,
    getSession,
} from "next-auth/react";
import styles from "../../styles/signin.module.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import SignInComponent from "../../components/signin/SignInComponent";
import CircleLoaderSpinner from "../../components/loaders/circleLoader ";


const country = {
    name: "United State",
    flag: "https://www.seekpng.com/png/full/3-34817_picture-download-american-flag-clipart-no-background-transparent.png",
};

const initialValues = {
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

export default function Login({providers, callbackUrl, csrfToken}) {
    const [user, setUser] = useState(initialValues);
    const [loading, setLoading] = useState(false);


    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    };

    return (
        <>
            {loading && <CircleLoaderSpinner loading={loading}/>}
            <Header country={country}/>
            <div className={styles.login}>
                <SignInComponent
                    user={user}
                    setUser={setUser}
                    handleChange={handleChange}
                    providers={providers}
                    setLoading={setLoading}
                    callbackUrl={callbackUrl}
                    csrfToken={csrfToken}
                />
            </div>
            <Footer country={country}/>
        </>
    );
};

export async function getServerSideProps(context) {
    const {req, query} = context;
    const session = await getSession({req});
    const {callbackUrl} = query;

    if (session) {
        return {
            redirect: {
                destination: callbackUrl || "/",
            },
        };
    };

    const csrfToken = await getCsrfToken(context);
    const providers = Object.values(await getProviders());
    return {
        props: {
            providers,
            csrfToken,
            callbackUrl: callbackUrl || "/"
        },
    };
}
