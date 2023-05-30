import React, {useState} from "react";
import styles from "../../styles/signin.module.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import SignUpComponent from "../../components/signin/SignUpComponent";
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

export default function SignIn() {
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
                <SignUpComponent
                    user={user}
                    setUser={setUser}
                    handleChange={handleChange}
                    setLoading={setLoading}
                />
            </div>
            <Footer country={country}/>
        </>
    );
};
