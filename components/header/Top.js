import React from 'react';
import styles from './style.module.scss';
import {MdSecurity} from "react-icons/md";
import {BsSuitHeart} from "react-icons/bs";
import {RiAccountPinCircleLine, RiArrowDropDownFill} from "react-icons/ri";
import Link from "next/link";

const Top = () => {
    return (
        <div className={styles.top}>
            <div className={styles.top__container}>
                <div></div>
                <ul className={styles.top__list}>
                    <li>
                        <img
                            src="https://www.seekpng.com/png/detail/185-1856467_clipart-library-library-hula-girl-clipart-hula-girl.png"
                            alt="Clipart Library Library Hula Girl Clipart - Hula Girl Clipart@seekpng.com"
                        />
                        <span>Morroco / usd</span>
                    </li>
                    <li>
                        <MdSecurity/>
                        <span>Buyer Protection</span>
                    </li>
                    <li className={styles.li}>
                        <span>Customer Service</span>
                    </li>
                    <li className={styles.li}>
                        <span>Help</span>
                    </li>
                    <li>
                        <BsSuitHeart/>
                        <Link href="/profile/whishlist">
                            <span>Whishlist</span>
                        </Link>
                    </li>
                    <li>
                        <div className={styles.flex}>
                            <RiAccountPinCircleLine/>
                            <span>Account</span>
                            <RiArrowDropDownFill/>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default Top;

