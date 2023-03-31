import styles from "./styles.module.scss";
import {FaFacebookF, FaTiktok} from "react-icons/fa";
import {
    BsInstagram,
    BsTwitter,
    BsYoutube,
    BsPinterest,
    BsSnapchat,
} from "react-icons/bs";
import { v4 as uuidv4 } from 'uuid';

const socials = [
    {name: <FaFacebookF/>, id: uuidv4()},
    {name: <BsInstagram/>, id: uuidv4()},
    {name: <BsTwitter/>, id: uuidv4()},
    {name: <BsYoutube/>, id: uuidv4()},
    {name: <BsPinterest/>, id: uuidv4()},
    {name: <BsSnapchat/>, id: uuidv4()},
    {name: <FaTiktok/>, id: uuidv4()}
];

export default function Socials() {
    return (
        <div className={styles.footer__socials}>
            <section>
                <h3>STAY CONNECTED</h3>
                <ul>
                    {socials.map(s => (
                        <li key={s.id}>
                            <a href="/" target="_blank">
                                {s.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
