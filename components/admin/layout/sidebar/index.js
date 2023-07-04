import {useDispatch, useSelector} from "react-redux";
import styles from "./styles.module.scss";
import {toggleSidebar} from "../../../../store/ExpandSlice";
import {useSession} from "next-auth/react";
import Link from "next/link";
import {useRouter} from "next/router";
import {MdArrowForwardIos} from "react-icons/md";
import {sidebarIconsMain, sidebarDropdown, sidebarIconsBottom} from "../../../../data/sidebarData";

export default function Sidebar() {
    const router = useRouter();
    const route = router.pathname.split("/admin/dashboard/")[1];
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
                <div className={styles.sidebar__user}>
                    <img src={session?.user?.image} alt=""/>
                    <div className={styles.show}>
                        <span>Welcome back 👋</span>
                        <span>{session?.user?.name}</span>
                    </div>
                </div>

                <ul className={styles.sidebar__list}>
                    {sidebarIconsMain.map((item) => (
                        <li key={item.id}>
                            <Link href={item.link}>
                                {item.icon}
                                <span className={styles.show}>{item.data}</span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className={styles.sidebar__dropdown}>
                    <div className={styles.sidebar__dropdown_heading}>
                        <div className={styles.show}>{sidebarDropdown.product.title}</div>
                    </div>
                    <ul className={styles.sidebar__list}>
                        {sidebarDropdown.product.list.map((item) => (
                            <li key={item.id} className={route === `${item.route}` ? styles.active : ""}>
                                <Link href={item.link}>
                                    {item.icon}
                                    <span className={styles.show}>{item.data}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.sidebar__dropdown}>
                    <div className={styles.sidebar__dropdown_heading}>
                        <div className={styles.show}>{sidebarDropdown.category.title}</div>
                    </div>

                    <ul className={styles.sidebar__list}>
                        {sidebarDropdown.category.list.map((item) => (
                            <li key={item.id} className={route === `${item.route}` ? styles.active : ""}>
                                <Link href={item.link}>
                                    {item.icon}
                                    <span className={styles.show}>{item.data}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.sidebar__dropdown}>
                    <div className={styles.sidebar__dropdown_heading}>
                        <div className={styles.show}>{sidebarDropdown.coupon.title}</div>
                    </div>
                    <ul className={styles.sidebar__list}>
                        {sidebarDropdown.coupon.list.map((item) => (
                            <li key={item.id} className={route === `${item.route}` ? styles.active : ""}>
                                <Link href={item.link}>
                                    {item.icon}
                                    <span className={styles.show}>{item.data}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
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
