import styles from "../../styles/order.module.scss";
import Header from "../../components/header";
import User from "../../models/User";
import db from "../../utils/db";

//import StripePayment from "../../components/stripePayment";
import OrderModel from "../../models/Order";
import OrderInfo from "../../components/order/OrderInfo";
import OrderActions from "../../components/order/OrderActions";

// import {getSession} from "next-auth/react";

// function reducer(state, action) {
//     switch (action.type) {
//         case "PAY_REQUEST":
//             return {...state, loading: true};
//         case "PAY_SUCCESS":
//             return {...state, loading: false, success: true};
//         case "PAY_FAIL":
//             return {...state, loading: false, error: action.payload};
//         case "PAY_RESET":
//             return {...state, loading: false, success: false, error: false};
//     }
// }

const Order = ({orderData, paypal_client_id, stripe_public_key}) => {
    // const [{isPending}, paypalDispatch] = usePayPalScriptReducer();
    // const [dispatch] = useReducer(reducer, {
    //     loading: true,
    //     error: "",
    //     success: "",
    // });
    //
    // useEffect(() => {
    //     if (!orderData._id) {
    //         dispatch({
    //             type: "PAY_RESET",
    //         });
    //     } else {
    //         paypalDispatch({
    //             type: "resetOptions",
    //             value: {
    //                 "client-id": paypal_client_id,
    //                 currency: "USD",
    //             },
    //         });
    //         paypalDispatch({
    //             type: "setLoadingStatus",
    //             value: "pending",
    //         });
    //     }
    // }, [order]);
    //
    // function createOrderHandler(data, actions) {
    //     return actions.order
    //         .create({
    //             purchase_units: [
    //                 {
    //                     amount: {
    //                         value: orderData.total,
    //                     },
    //                 },
    //             ],
    //         })
    //         .then((order_id) => {
    //             return order_id;
    //         });
    // }
    //
    // function onApproveHandler(data, actions) {
    //     return actions.order.capture().then(async function (details) {
    //         try {
    //             dispatch({type: "PAY_REQUEST"});
    //             const {data} = await axios.put(
    //                 `/api/order/${orderData._id}/pay`,
    //                 details
    //             );
    //             dispatch({type: "PAY_SUCCESS", payload: data});
    //         } catch (error) {
    //             dispatch({type: "PAY_ERROR", payload: error});
    //         }
    //     });
    // }
    //
    // function onErrorHandler(error) {
    //     console.log(error);
    // }

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
                        // onApproveHandler={onApproveHandler}
                        // onErrorHandler={onErrorHandler}
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
