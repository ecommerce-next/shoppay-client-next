import React from 'react';
import styles from "../../../styles/dashboard.module.scss";
import Link from "next/link";
import {SlEye} from "react-icons/sl";

const OrdersSection = ({orders}) => {
    return (
        <div>
            <div className={styles.orders}>
                <div className={styles.heading}>
                    <h2>Recent Orders</h2>
                    <Link href="/admin/dashboard/orders">View All</Link>
                </div>

                <table>
                    <thead>
                    <tr>
                        <td>Name</td>
                        <td>Total</td>
                        <td>Payment</td>
                        <td>Status</td>
                        <td>View</td>
                    </tr>
                    </thead>

                    <tbody>
                    {orders.map((order) => (
                        <tr key={order._id}>
                            <td>{order.user.name}</td>
                            <td>{order.total} $</td>
                            <td>
                                {order.isPaid ? (
                                    <img src="../../../images/verified.webp" alt=""/>
                                ) : (
                                    <img src="../../../images/unverified1.png" alt=""/>
                                )}
                            </td>
                            <td>
                                <div
                                    className={`${styles.status} ${
                                        order.status === "Not Processed"
                                            ? styles.not_processed
                                            : order.status === "Processing"
                                                ? styles.processing
                                                : order.status === "succeeded"
                                                    ? styles.dispatched
                                                    : order.status === "Cancelled"
                                                        ? styles.cancelled
                                                        : order.status === "Completed"
                                                            ? styles.completed
                                                            : ""
                                    }`}
                                >
                                    {order.status}
                                </div>
                            </td>
                            <td>
                                <Link href={`/order/${order._id}`}>
                                    <SlEye/>
                                </Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrdersSection;