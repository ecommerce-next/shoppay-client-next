import styles from "../styles.module.scss";
import PacmanLoader from "react-spinners/PacmanLoader";

export default function PacmanLoaderSpinner({ loading }) {
    return (
        <div className={styles.loader}>
            <PacmanLoader color="#2f82ff" loading={loading} />
        </div>
    );
}
