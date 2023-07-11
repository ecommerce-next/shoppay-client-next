import {getSession} from "next-auth/react";
import Layout from "../../components/profile/layout";
import Link from "next/link";
import styles from "../../styles/profile.module.scss";

export default function profile({user, tab}) {
    return (
        <Layout session={user.user} tab={tab}>
            <h1>Profile page of {user.user.name}</h1>
            <p>email: {user.user.email}</p>
            <p>role: {user.user.role}
                {user.user.role === "admin" &&
                    <Link href="/admin/dashboard/" className={styles.roleLink}>Go to admin page</Link>}
            </p>
        </Layout>
    );
}

export async function getServerSideProps(ctx) {
    const {query, req} = ctx;
    const session = await getSession({req});
    const tab = query.tab || 0;
    return {
        props: {
            user: session,
            tab
        }
    };
}
