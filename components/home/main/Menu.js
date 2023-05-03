import styles from "./styles.module.scss";
import {menuArray} from "../../../data/home";
import Link from "next/link";
import { BiCategory} from "react-icons/bi";

export default function Menu() {
    return (
        <div className={styles.menu}>
            <div className={styles.menu__list}>
                <ul>
                    <li>
                        <a className={styles.menu__header}>
                            <BiCategory/>
                            <b>Categories</b>
                        </a>
                    </li>

                    {menuArray.map((item, i) => (
                        <li key={item.name}>
                            <Link href={item.link}>
                                {item.icon}
                                <span>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
