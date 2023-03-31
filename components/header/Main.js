import Link from "next/link";
import styles from './style.module.scss';
import { RiSearch2Line } from "react-icons/ri";
import { FaOpencart } from "react-icons/fa";
import {useSelector} from "react-redux";

const Main = () => {
    const {cart} =useSelector((state) => ({...state}));
    console.log(cart.length, 'cart.length')

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
                    <span>{cart? cart.length : 0}</span>
                </Link>
            </div>
        </div>
    );
};

export default Main;