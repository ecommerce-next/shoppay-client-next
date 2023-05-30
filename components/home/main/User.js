import {useSession} from "next-auth/react";
import Link from "next/link";
import styles from "./styles.module.scss";
import {userLinksArray} from "../../../data/home";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import {EffectCards, Navigation} from "swiper";
import {userSwiperArray} from "../../../data/home";
import Router from "next/router";

export default function User() {
    const {data: session} = useSession();
    const registerHandler = () => {
        return Router.push(`/auth/signup`);

    }
    const loginHandler = () => {
        return Router.push(`/auth/signin`);
    }

    return (
        <div className={styles.user}>
            <img
                src="../../../images/userHeader.jpg"
                alt=""
                className={styles.user__header}
            />
            <div className={styles.user__container}>
                {session ? (
                    <div className={styles.user__infos}>
                        <img src={session.user?.image} alt=""/>
                        <h4>{session.user.name}</h4>
                    </div>
                ) : (
                    <div className={styles.user__infos}>
                        <img
                            src="https://res.cloudinary.com/dmhcnhtng/image/upload/v1664642478/992490_b0iqzq.png"
                            alt=""
                        />
                        <div className={styles.user__infos_btns}>
                            <button onClick={registerHandler}>Register</button>
                            <button onClick={loginHandler}>Login</button>
                        </div>
                    </div>
                )}

                <ul className={styles.user__links}>
                    {userLinksArray.map((link) => (
                        <li key={link.id}>
                            {link.icon}
                        </li>
                    ))}
                </ul>

                <div className={styles.user__swiper}>
                    <img
                        src="https://assets.stickpng.com/images/5a5a6d2414d8c4188e0b088d.png"
                        alt=""
                        className={styles.new}
                    />

                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        navigation={true}
                        modules={[EffectCards, Navigation]}
                        className="user__swiper"
                        style={{
                            maxWidth: "180px",
                            height: "240px",
                            marginTop: "1rem",
                        }}
                    >
                        {userSwiperArray.map((item) => (
                            <SwiperSlide key={item.id}>
                                <Link href="">
                                    <img src={item.image} alt=""/>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <img
                src="../../../images/userHeader.jpg"
                alt=""
                className={styles.user__footer}
            />
        </div>
    );
}
