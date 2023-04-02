import Link from "next/link";
import styles from "./styles.module.scss";
import {IoLocationSharp} from "react-icons/io5";
import {v4 as uuidv4} from 'uuid';

const data = [
    {
        name: "Privacy Center",
        link: "",
        id: uuidv4(),
    },
    {
        name: "Privacy & Cookie Policy",
        link: "",
        id: uuidv4(),
    },
    {
        name: "Manage Cookies",
        link: "",
        id: uuidv4(),
    },
    {
        name: "Terms & Conditions",
        link: "",
        id: uuidv4(),
    },
    {
        name: "Copyright Notice",
        link: "",
        id: uuidv4(),
    },
];

export default function Copyright({country}) {
    return (
        <div className={styles.footer__copyright}>
            <section>©2022 SHOPPAY All Rights Reserved.</section>

            <section>
                <ul>
                    {data.map((el) => (
                        <li key={el.id}>
                            <Link href={el.link}>{el.name}</Link>
                        </li>
                    ))}
                    <li>
                        <a href=''>
                            <IoLocationSharp/>
                            {country.name}
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    );
}
