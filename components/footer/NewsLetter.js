import Link from "next/link";
import {useState} from "react";
import styles from "./styles.module.scss";
// import axios from "axios";

const NewsLetter = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");


    return (
        <div>
            <div className={styles.footer__newsletter}>
                <h3>SIGN UP FOR OUR NEWSLETTER</h3>

                <div className={styles.footer__flex}>
                    <input type="text" placeholder='Your email address'/>
                    <button className={styles.btn_primary}>
                        SUBSCRIBE
                    </button>
                </div>

                <p>
                    By clicking the SUBSCRIBE button, you are agreeing to{" "}
                    <Link href="">our Privacy & Cookie Policy</Link>
                </p>
            </div>
        </div>
    );
};

export default NewsLetter;