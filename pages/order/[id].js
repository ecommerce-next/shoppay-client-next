import styles from "../../styles/order.module.scss";
import Header from "../../components/header";
import User from "../../models/User";
import db from "../../utils/db";
import OrderModel from "../../models/Order";
import OrderInfo from "../../components/order/OrderInfo";
import OrderActions from "../../components/order/OrderActions";

const Order = ({orderData, paypal_client_id, stripe_public_key}) => {
    return (
        <>
            <Header country="country"/>
            <div className={styles.order}>
                <div className={styles.container}>
                    <OrderInfo orderData={orderData}/>
                    <OrderActions
                        orderData={orderData}
                        paypal_client_id={paypal_client_id}
                        stripe_public_key={stripe_public_key}
                    />
                </div>
            </div>
        </>
    );
}

export default Order;

export async function getServerSideProps(context) {
    await db.connectDb();

    const {query} = context;
    const id = query.id;
    const order = await OrderModel.findById(id)
        .populate({path: "user", model: User})
        .lean();
    let paypal_client_id = process.env.PAYPAL_CLIENT_ID;
    let stripe_public_key = process.env.STRIPE_PUBLIC_KEY;

    await db.disconnectDb();

    return {
        props: {
            orderData: JSON.parse(JSON.stringify(order)),
            paypal_client_id,
            stripe_public_key,
        },
    };
}
