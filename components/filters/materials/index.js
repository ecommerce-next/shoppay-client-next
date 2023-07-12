import React, {useState} from "react";
import styles from "../filters.module.scss";
import {FaMinus} from "react-icons/fa";
import {BsPlusLg} from "react-icons/bs";

export default function Materials({materials}) {
    const [show, setShow] = useState(true);
    return (
        <div className={styles.filter}>
            <h3 onClick={() => setShow((prev) => !prev)}>
                Material
                <span>{show ? <FaMinus/> : <BsPlusLg/>}</span>
            </h3>
            {show && (
                <div>
                    {materials.map(p => (
                        <div key={p} className={styles.filter__sizes_wrap_size}>
                            <input type="checkbox" name="pattern" id={p}/>
                            <label htmlFor={p}>{p}</label>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
