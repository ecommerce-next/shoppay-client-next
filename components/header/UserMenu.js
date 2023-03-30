import Link from "next/link";
import styles from './style.module.scss';
// import { signOut, signIn } from "next-auth/react";

export default function UserMenu({ loggedIn }) {
    return (
        <div className={styles.menu}>
            <h4>Welcome to Shoppay !</h4>

            {loggedIn ? (
                <div className={styles.flex}>
                    <img
                        src="https://th.bing.com/th/id/OIP.H1w2cshS4jS9WqGDI-t3oQHaHa?pid=ImgDet&w=950&h=950&rs=1"
                        alt=""
                        className={styles.menu__img}
                    />
                    <div className={styles.col}>
                        <span>Welcome Back,</span>
                        <h3>IRINA</h3>
                        <span onClick={() => signOut()}>Sign out</span>
                    </div>
                </div>
            ) : (
                <div className={styles.flex}>
                    <button className={styles.btn_primary}>Register</button>
                    <button className={styles.btn_outlined} onClick={() => signIn()}>
                        Login
                    </button>
                </div>
            )}

            <ul>
                <li>
                    <Link href="/profile">Account</Link>
                </li>
                <li>
                    <Link href="/profile/orders">My Orders</Link>
                </li>
                <li>
                    <Link href="/profile/messages">Message Center</Link>
                </li>
                <li>
                    <Link href="/profile/address">Address</Link>
                </li>
                <li>
                    <Link href="/profile/whishlist">Whishlist</Link>
                </li>
            </ul>
        </div>
    );
}
