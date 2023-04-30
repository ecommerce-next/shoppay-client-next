import styles from "../styles.module.scss";
import CircleLoader from "react-spinners/CircleLoader";

export default function CircleLoaderSpinner({ loading }) {
  return (
    <div className={styles.loader}>
      <CircleLoader color="#2f82ff" loading={loading} />
    </div>
  );
}
