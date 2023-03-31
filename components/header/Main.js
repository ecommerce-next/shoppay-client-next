import Link from "next/link";
import styles from './style.module.scss';
import { RiSearch2Line } from "react-icons/ri";
import { FaOpencart } from "react-icons/fa";

const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.main__container}>
                <Link className={styles.logo} href="/">
                        <img src="../../../logo.png" alt="" />
                </Link>
                <div className={styles.search}>
                    <input type="text" placeholder='Search...'/>
                    <div className={styles.search__icon}>
                        <RiSearch2Line />
                    </div>
                </div>

                <Link href='/cart' className={styles.cart}>
                    <FaOpencart />
                </Link>
            </div>
        </div>
    );
};

export default Main;