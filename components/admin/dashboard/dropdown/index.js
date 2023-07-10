import {useState} from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import {dropdownList, dropdownList2} from "../../../../data/adminData/dashboardData";
import {signOut} from "next-auth/react";

export default function Dropdown({userImage}) {
    const [show, setShow] = useState(false);

    return (
        <div className={styles.dropdown}
            onMouseOver={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            <div className={styles.dropdown__toggle}><img src={userImage} alt=""/></div>

            <div className={`${styles.dropdown__content} ${show ? styles.active : ""}`}>
                <div className={styles.dropdown__content_icons}>
                    {dropdownList.map((item) => (
                        <div
                            key={item.id}
                            className={styles.dropdown__content_icons_icon}
                            style={{transform: item.path === "/admin/dashboard/subCategories" ? "rotate(180deg)" : ""}}
                        >
                            <div key={item.id} className={styles.dropdown__content_icons_icon}>
                                <Link href={item.path}>
                                    {item.icon}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.dropdown__content_items}>
                    {dropdownList2.map((item) => (
                        <div key={item.id} className={styles.dropdown__content_icons_icon}>
                            <Link href={item.path}>
                                {item.icon}
                            </Link>
                        </div>
                    ))}
                </div>

                <div className={styles.dropdown__logout}>
                    <button onClick={() => signOut()}>Logout</button>
                </div>
            </div>
        </div>
    );
}
