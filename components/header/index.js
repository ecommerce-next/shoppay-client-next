import styles from "./style.module.scss";
import Ad from "./Ad";
import Top from './Top'
import Main from './Main'

function Header({country}) {
    return (
        <header className={styles.header}>
            <Ad/>
            <Top country={country}/>
            <Main/>
        </header>
    );
}

export default Header;