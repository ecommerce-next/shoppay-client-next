import React, {useState} from 'react';
import styles from "../styles.module.scss";
import {FaMinus} from "react-icons/fa";
import {BsPlusLg} from "react-icons/bs";

const BrowseFilter = ({categories, title, handler, replaceQuery, categoryClass, description}) => {
    const [show, setShow] = useState(false);

    return (
        <div className={styles.filter}>
            <h3 onClick={() => setShow(!show)}>
                {title}
                <span>{show ? <FaMinus/> : <BsPlusLg/>}</span>
            </h3>

            {show && (
                <div className={styles.filter__sizes}>
                    {categories.map(category => {
                        const check = replaceQuery(`${category}`, category);
                        return (
                            <button
                                key={category}
                                className={`${categoryClass} ${check.active ? styles.activeFilter : ""}`}
                                onClick={() => handler(check.result)}
                            >
                                {/*{category}*/}
                                {description}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default BrowseFilter;