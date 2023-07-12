import {useState} from "react";
import {BsPlusLg} from "react-icons/bs";
import {FaMinus} from "react-icons/fa";
import styles from "../styles.module.scss";

export default function BrandsFilter({brands, brandHandler, replaceQuery}) {
    const [show, setShow] = useState(false);

    return (
        <div className={styles.filter}>
            <h3 onClick={() => setShow(!show)}>
                Brands
                <span>{show ? <FaMinus/> : <BsPlusLg/>}</span>
            </h3>

            {show && (
                <div className={styles.filter__sizes}>
                    {brands.map(brand => {
                        const check = replaceQuery("brand", brand);
                        return (
                            <button
                                key={brand}
                                className={`${styles.filter__brand} ${check.active ? styles.activeFilter : ""}`}
                                onClick={() => brandHandler(check.result)}
                            >
                                <img src={`../../../images/brands/${brand}.png`} alt=""/>
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
