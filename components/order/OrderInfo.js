import React from 'react';
import styles from "../../styles/order.module.scss";
import {IoIosArrowForward} from "react-icons/io";

const OrderInfo = ({orderData}) => {
    return (
        <div className={styles.order__infos}>
            <div className={styles.order__header}>
                <div className={styles.order__header_head}>
                    Home <IoIosArrowForward/> Orders <IoIosArrowForward/> ID{" "}
                    {orderData._id}
                </div>

                <div className={styles.order__header_status}>
                    Payment Status :{" "}
                    {orderData.isPaid ? (
                        <img src="../../../images/verified.png" alt="paid"/>
                    ) : (
                        <img src="../../../images/unverified.png" alt="paid"/>
                    )}
                </div>

                <div className={styles.order__header_status}>
                    Order Status :
                    <span
                        className={
                            orderData.status == "Not Processed"
                                ? styles.not_processed
                                : orderData.status == "Processing"
                                    ? styles.processing
                                    : orderData.status == "Dispatched"
                                        ? styles.dispatched
                                        : orderData.status == "Cancelled"
                                            ? styles.cancelled
                                            : orderData.status == "Completed"
                                                ? styles.completed
                                                : ""}>
                                                {orderData.status}
                                            </span>
                </div>
            </div>

            <div className={styles.order__products}>
                {orderData.products.map((product) => (
                    <div className={styles.product} key={product._id}>
                        <div className={styles.product__img}>
                            <img src={product.image} alt={product.name}/>
                        </div>
                        <div className={styles.product__infos}>
                            <h1 className={styles.product__infos_name}>
                                {product.name.length > 30
                                    ? `${product.name.substring(0, 30)}...`
                                    : product.name}
                            </h1>
                            <div className={styles.product__infos_style}>
                                <img src={product.color.image} alt=""/> / {product.size}
                            </div>
                            <div className={styles.product__infos_priceQty}>
                                {product.price}$ x {product.qty}
                            </div>
                            <div className={styles.product__infos_total}>
                                {product.price * product.qty}$
                            </div>
                        </div>
                    </div>
                ))}

                <div className={styles.order__products_total}>
                    {orderData.couponApplied ? (<>
                            <div className={styles.order__products_total_sub}>
                                <span>Subtotal</span>
                                <span>{orderData.totalBeforeDiscount}$</span>
                            </div>
                            <div className={styles.order__products_total_sub}>
                                                        <span>
                                                            Coupon Applied <em>({orderData.couponApplied})</em>{" "}
                                                        </span>
                                <span>-{(orderData.totalBeforeDiscount - orderData.total).toFixed(2)}$</span>
                            </div>
                            <div className={styles.order__products_total_sub}>
                                <span>Tax price</span>
                                <span>+{orderData.taxPrice}$</span>
                            </div>
                            <div className={`${styles.order__products_total_sub} ${styles.bordertop}`}>
                                <span>TOTAL TO PAY</span>
                                <b>{orderData.total}$</b>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={styles.order__products_total_sub}>
                                <span>Tax price</span>
                                <span>+{orderData.taxPrice}$</span>
                            </div>
                            <div className={`${styles.order__products_total_sub} ${styles.bordertop}`}>
                                <span>TOTAL TO PAY</span>
                                <b>{orderData.total}$</b>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OrderInfo;