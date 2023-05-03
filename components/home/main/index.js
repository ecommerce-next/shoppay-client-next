import styles from "./styles.module.scss";
// import MainSwiper from "./swiper";
// import Offers from "./offers";
import { useSession } from "next-auth/react";
import Menu from "./Menu";
// import "swiper/css";
// import "swiper/css/effect-cards";
// import User from "./User";
// import Header from "./Header";


export default function Main() {
    const { data: session } = useSession();
    return (
        <div className={styles.main}>
            {/*<Header />*/}
            <Menu />
            {/*<MainSwiper />*/}
            {/*<Offers />*/}
            {/*<User />*/}
        </div>
    );
}
