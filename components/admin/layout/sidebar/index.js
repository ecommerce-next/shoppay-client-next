import {useDispatch, useSelector} from "react-redux";
import styles from "./styles.module.scss";
import {toggleSidebar} from "../../../../store/ExpandSlice";
import {useSession} from "next-auth/react";
import Link from "next/link";
import Router, {useRouter} from "next/router";
import {MdArrowForwardIos} from "react-icons/md";
import {sidebarIconsMain, sidebarDropdown, sidebarIconsBottom} from "../../../../data/adminData/sidebarData";

export default function Sidebar() {
    const router = useRouter();
    const route = router.pathname;
    const {data: session} = useSession();
    const {expandSidebar} = useSelector((state) => ({...state}));
    const expand = expandSidebar.expandSidebar;
    const dispatch = useDispatch();
    const handleExpand = () => dispatch(toggleSidebar());

    return (
        <div className={`${styles.sidebar} ${expand ? styles.opened : ""}`}>
            <div className={styles.sidebar__toggle} onClick={() => handleExpand()}>
                <div style={{transform: `${expand ? "rotate(180deg)" : ""}`, transition: "all .2s",}}>
                    <MdArrowForwardIos/>
                </div>
            </div>

            <div className={styles.sidebar__container}>
                <div className={styles.sidebar__header}><span/> <span/> <span/></div>

                <div className={styles.sidebar__user}>
                    {session ?
                        <>
                            <img src={session?.user?.image} alt={session?.user?.name}/>
                            <div className={styles.show}>
                                <span>Welcome back 👋</span>
                                <span>{session?.user?.name}</span>
                            </div>
                        </> : <>
                            <div className={styles.show}>
                                <img
                                    src="https://res.cloudinary.com/dmhcnhtng/image/upload/v1664642478/992490_b0iqzq.png"
                                    alt=""
                                />
                                <button onClick={() => Router.push('/auth/login')}>Login</button>
                                <span>Please login</span>
                            </div>
                        </>
                    }
                </div>

                <ul className={styles.sidebar__list}>
                    {sidebarIconsMain.map((item) => (
                        <li key={item.id} className={route == `${item.route}` ? styles.active : ""}>
                            <Link href={item.link}>
                                {item.icon}
                                <span className={styles.show}>{item.data}</span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className={styles.sidebar__dropdown}>
                    {Object.keys(sidebarDropdown).map((el) => (
                        <div key={sidebarDropdown[el].id}>
                            <div className={styles.sidebar__dropdown_heading}>
                                <div className={styles.show}>{sidebarDropdown[el].title}</div>
                            </div>

                            <ul className={styles.sidebar__list}>
                                {sidebarDropdown[el].list.map((item) => (
                                    <li key={item.id} className={route === `${item.route}` ? styles.active : ""}>
                                        <Link href={item.link}>
                                            {item.icon}
                                            <span className={styles.show}>{item.data}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <nav>
                    <ul className={`${styles.sidebar__list} ${expand ? styles.nav_flex : ""}`}>
                        {sidebarIconsBottom.map((item) => (
                            <li key={item.id}><Link href="">{item.icon}</Link></li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}
