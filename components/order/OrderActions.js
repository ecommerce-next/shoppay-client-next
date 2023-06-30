import React, {useEffect, useReducer} from 'react';
import styles from "../../styles/order.module.scss";
import {PayPalButtons, usePayPalScriptReducer} from "@paypal/react-paypal-js";
import axios from "axios";
import StripePayment from "../stripePayment";

function reducer(state, action) {
    switch (action.type) {
        case "PAY_REQUEST":
            return {...state, loading: true};
        case "PAY_SUCCESS":
            return {...state, loading: false, success: true};
        case "PAY_FAIL":
            return {...state, loading: false, error: action.payload};
        case "PAY_RESET":
            return {...state, loading: false, success: false, error: false};
    }
}

const OrderActions = ({orderData, paypal_client_id, stripe_public_key,}) => {
    const [{isPending}, paypalDispatch] = usePayPalScriptReducer();

    const [dispatch] = useReducer(reducer, {
        loading: true,
        error: "",
        success: "",
    });

    useEffect(() => {
        if (!orderData._id) {
            dispatch({
                type: "PAY_RESET",
            });
        } else {
            paypalDispatch({
                type: "resetOptions",
                value: {
                    "client-id": paypal_client_id,
                    currency: "USD",
                },
            });
            paypalDispatch({
                type: "setLoadingStatus",
                value: "pending",
            });
        }
    }, [orderData]);

    function createOrderHandler(data, actions) {
        return actions.order
            .create({
                purchase_units: [
                    {
                        amount: {
                            value: orderData.total,
                        },
                    },
                ],
            })
            .then((order_id) => {
                return order_id;
            });
    }

    function onApproveHandler(data, actions) {
        return actions.order.capture().then(async function (details) {
            try {
                dispatch({type: "PAY_REQUEST"});
                const {data} = await axios.put(
                    `/api/order/${orderData._id}/pay`,
                    details
                );
                dispatch({type: "PAY_SUCCESS", payload: data});
            } catch (error) {
                dispatch({type: "PAY_ERROR", payload: error});
            }
        });
    }

    function onErrorHandler(error) {
        console.log(error);
    }

    return (
        <div className={styles.order__actions}>
            <div className={styles.order__address}>
                <h1>Customer`s Order</h1>
                <div className={styles.order__address_user}>
                    <div className={styles.order__address_user_infos}>
                        <img src={orderData.user.image} alt=""/>
                        <div>
                            <span>{orderData.user.name}</span>
                            <span>{orderData.user.email}</span>
                        </div>
                    </div>
                </div>

                <div className={styles.order__address_shipping}>
                    <h2>Shipping Address</h2>
                    <span>{orderData.shippingAddress.firstName}{" "}{orderData.shippingAddress.lastName}</span>
                    <span>{orderData.shippingAddress.address1}</span>
                    <span>{orderData.shippingAddress.address2}</span>
                    <span>{orderData.shippingAddress.state},{orderData.shippingAddress.city}</span>
                    <span>{orderData.shippingAddress.zipCode}</span>
                    <span>{orderData.shippingAddress.country}</span>
                </div>

                <div className={styles.order__address_shipping}>
                    <h2>Billing Address</h2>
                    <span>{orderData.shippingAddress.firstName}{" "}{orderData.shippingAddress.lastName}</span>
                    <span>{orderData.shippingAddress.address1}</span>
                    <span>{orderData.shippingAddress.address2}</span>
                    <span>{orderData.shippingAddress.state},{orderData.shippingAddress.city}</span>
                    <span>{orderData.shippingAddress.zipCode}</span>
                    <span>{orderData.shippingAddress.country}</span>
                </div>
            </div>

            {!orderData.isPaid && (
                <div className={styles.order__payment}>
                    {orderData.paymentMethod == "paypal" && (
                        <div>
                            {isPending ? (
                                <span>loading...</span>
                            ) : (
                                <PayPalButtons
                                    createOrder={createOrderHandler}
                                    onApprove={onApproveHandler}
                                    onError={onErrorHandler}
                                ></PayPalButtons>
                            )}
                        </div>
                    )}
                    {orderData.paymentMethod == "credit_card" && (
                        <StripePayment
                            total={orderData.total}
                            order_id={orderData._id}
                            stripe_public_key={stripe_public_key}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default OrderActions;