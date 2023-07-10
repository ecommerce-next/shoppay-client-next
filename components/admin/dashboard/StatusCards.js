import React from 'react';
import styles from "../../../styles/dashboard.module.scss";
import {TbUsers} from "react-icons/tb";
import {SlHandbag} from "react-icons/sl";
import {SiProducthunt} from "react-icons/si";
import {GiTakeMyMoney} from "react-icons/gi";

const StatusCards = ({users, orders, products}) => {
    return (
        <div>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <div className={styles.card__icon}><TbUsers/></div>
                    <div className={styles.card__infos}>
                        <h4>+{users.length}</h4>
                        <span>Users</span>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.card__icon}><SlHandbag/></div>
                    <div className={styles.card__infos}>
                        <h4>+{orders.length}</h4>
                        <span>Orders</span>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.card__icon}><SiProducthunt/></div>
                    <div className={styles.card__infos}>
                        <h4>+{products.length}</h4>
                        <span>Products</span>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.card__icon}><GiTakeMyMoney/></div>
                    <div className={styles.card__infos}>
                        <h4>+{orders.reduce((a, val) => a + val.total, 0)}$</h4>
                        <h5>
                            - {orders
                                .filter((o) => !o.isPaid)
                                .reduce((a, val) => a + val.total, 0)}
                            $ Unpaid yet.
                        </h5>
                        <span>Total Earnings</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatusCards;