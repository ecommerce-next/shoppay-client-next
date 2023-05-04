import styles from "./styles.module.scss";
import { useSession } from "next-auth/react";
import Header from "./Header";
import Menu from "./Menu";
import MainSwiper from "./Swiper";
import Offers from "./Offers";
import User from "./User";
// import "swiper/css";
// import "swiper/css/effect-cards";


export default function Main() {
    const { data: session } = useSession();
    return (
        <div className={styles.main}>
            <Header />
            <Menu />
            <MainSwiper />
            <Offers />
            <User />
        </div>
    );
}
