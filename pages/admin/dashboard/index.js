import Layout from "../../../components/admin/layout";
import styles from "../../../styles/dashboard.module.scss";
import User from "../../../models/User";
import Order from "../../../models/Order";
import Product from "../../../models/Product";
import Head from "next/head";
import {useSession} from "next-auth/react";
import Dropdown from "../../../components/admin/dashboard/dropdown";
import Notifications from "../../../components/admin/dashboard/notifications";
import StatusCards from "../../../components/admin/dashboard/StatusCards";
import OrdersSection from "../../../components/admin/dashboard/OrdersSection";
import UsersSection from "../../../components/admin/dashboard/UsersSection";

export default function Dashboard({users, orders, products}) {
    const {data: session} = useSession();

    return (
        <div>
            <Head><title>Shoppay - Admin Dashboard</title></Head>

            <Layout>
                <div className={styles.header}>
                    <div className={styles.header__search}>
                        <label htmlFor="">
                            <input type="text" placeholder="Search here..."/>
                        </label>
                    </div>

                    <div className={styles.header__right}>
                        <Dropdown userImage={session?.user?.image}/>
                        <Notifications/>
                    </div>
                </div>

                <StatusCards
                    users={users}
                    orders={orders}
                    products={products}
                />

                <div className={styles.data}>
                    <OrdersSection orders={orders}/>
                    <UsersSection users={users}/>
                </div>
            </Layout>
        </div>
    );
}

export async function getServerSideProps({req}) {
    const users = await User.find().lean();
    const orders = await Order.find()
        // .limit(5)
        .populate({path: "user", model: User})
        .lean();
    const products = await Product.find().lean();
    return {
        props: {
            users: JSON.parse(JSON.stringify(users)),
            orders: JSON.parse(JSON.stringify(orders)),
            products: JSON.parse(JSON.stringify(products)),
        },
    };
}
