import {useState} from "react";
import {Formik, Form} from "formik";
import * as Yup from "yup";
import Link from "next/link";
import styles from "../styles/signin.module.scss";
import Header from "../components/header";
import Footer from "../components/footer";
import LoginInput from "../components/inputs/loginInput";
import {BiLeftArrowAlt} from "react-icons/bi";
// import CircledIconBtn from "../components/buttons/circledIconBtn";

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

const signin = () => {
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
    console.log(loginValidation, '=========loginValidation');

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
                                    {/*<CircledIconBtn type="submit" text="Sign up" />*/}
                                </Form>
                            )}
                        </Formik>

                    </div>
                </div>
            </div>
            <Footer country={country}/>
        </>
    );
};

export default signin;