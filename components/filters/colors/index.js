import styles from "../filters.module.scss";
import {FaMinus} from "react-icons/fa";
import {BsPlusLg} from "react-icons/bs";
import {useState} from "react";

export default function ColorsFilter({colors}) {
    const [show, setShow] = useState(true);

    return (
        <div className={styles.filter}>
            <h3 onClick={() => setShow((prev) => !prev)}>
                Colors
                <span>{show ? <FaMinus/> : <BsPlusLg/>}</span>
            </h3>
            {show && (
                <div className={styles.filter__colors_wrap}>
                    {colors.map(color => (
                        <button key={color} style={{background: `${color}`}}></button>
                    ))}
                </div>
            )}
        </div>
    );
}
