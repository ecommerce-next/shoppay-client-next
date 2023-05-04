import styles from "./styles.module.scss";
import {menuArray} from "../../../data/home";
import Link from "next/link";
import {BiCategory} from "react-icons/bi";

export default function Menu() {
    return (
        <div className={styles.menu}>

            <ul>
                <li>
                    <a className={styles.menu__header}>
                        <BiCategory/>
                        <b>Categories</b>
                    </a>
                </li>
                <div className={styles.menu__list}>
                    {menuArray.map((item) => (
                        <li key={item.name}>
                            <Link href={item.link}>
                                {item.icon}
                                <span>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </div>
            </ul>

        </div>
    );
}
