import React from 'react';
import styles from "../../../styles/dashboard.module.scss";
import Link from "next/link";

const UsersSection = ({users}) => {
    return (
        <div>
            <div className={styles.users}>
                <div className={styles.heading}>
                    <h2>Recent Users</h2>
                    <Link href="/admin/dashboard/users">View All</Link>
                </div>

                <table>
                    <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td className={styles.user}>
                                <div className={styles.user__img}>
                                    <img src={user.image} alt=""/>
                                </div>
                                <div>
                                    <h4>{user.name}</h4>
                                    <span>{user.email}</span>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default UsersSection;