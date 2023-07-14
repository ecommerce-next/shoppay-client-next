import Link from "next/link";
import styles from './style.module.scss';
import { RiSearch2Line } from "react-icons/ri";
import { FaOpencart } from "react-icons/fa";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";
import {useState} from "react";

const Main = ({searchHandler}) => {
    const router = useRouter();
    const [query, setQuery] = useState(router.query.search || "");
    const {cart} =useSelector((state) => ({...state}));

    const handleSearch = (e) => {
        e.preventDefault();
        if (router.pathname !== "/browse") {
            if (query.length > 1) {
                router.push(`/browse?search=${query}`);
            }
        } else {
            searchHandler(query);
        }
    };

    return (
        <div className={styles.main}>
            <div className={styles.main__container}>
                <Link className={styles.logo} href="/">
                        <img src="../../../logo.png" alt="" />
                </Link>

                <form
                    onSubmit={(e) => handleSearch(e)}
                    className={styles.search}
                >
                    <input
                        type="text"
                        placeholder='Search...'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button type="submit" className={styles.search__icon}>
                        <RiSearch2Line />
                    </button>
                </form>

                <Link href='/cart' className={styles.cart}>
                    <FaOpencart />
                    <span>{cart.cartItems? cart.cartItems.length : 0}</span>
                </Link>
            </div>
        </div>
    );
};

export default Main;