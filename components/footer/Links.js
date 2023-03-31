import Link from "next/link";
import styles from "./styles.module.scss";
import {v4 as uuidv4} from 'uuid';

const links = [
    {
        heading: "SHOPPAY",
        id: uuidv4(),

        links: [
            {
                name: "About us",
                link: "",
                id: uuidv4(),
            },
            {
                name: "Contact us",
                link: "",
                id: uuidv4()
            },
            {
                name: "Social Responsibility",
                link: "",
                id: uuidv4()
            },
            {
                name: "",
                link: "",
                id: uuidv4()
            },
        ],
    },
    {
        heading: "HELP & SUPPORT",
        id: uuidv4(),

        links: [
            {
                name: "Shipping Info",
                link: "",
                id: uuidv4()
            },
            {
                name: "Returns",
                link: "",
                id: uuidv4()
            },
            {
                name: "How To Order",
                link: "",
                id: uuidv4()
            },
            {
                name: "How To Track",
                link: "",
                id: uuidv4()
            },
            {
                name: "Size Guide",
                link: "",
                id: uuidv4()
            },
        ],
    },
    {
        heading: "Customer service",
        id: uuidv4(),

        links: [
            {
                name: "Customer service",
                link: "",
                id: uuidv4()
            },
            {
                name: "Terms and Conditions",
                link: "",
                id: uuidv4()
            },
            {
                name: "Consumers (Transactions)",
                link: "",
                id: uuidv4()
            },
            {
                name: "Take our feedback survey",
                link: "",
                id: uuidv4()
            },
        ],
    },
];


const Links = () => {
    return (
        <div className={styles.footer__links}>
            {links.map((el, i) => (
                <ul key={el.id}>
                    {
                        i === 0 ? (
                            <img src="../../../logo.png" alt=''/>
                        ) : (
                            <b>{el.heading}</b>
                        )
                    }
                    {el.links.map(elm => (
                        <li key={elm.id}>
                            <Link href={elm.link}>
                                {elm.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            ))}
        </div>
    );
};

export default Links;