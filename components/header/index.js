import React from 'react';
import styles from "./style.module.scss";
import Ad from "./Ad";
import Top from './Top'

function Header() {
    return (
        <header className={styles.header}>
            <Ad/>
            <Top/>
        </header>
    );
}

export default Header;