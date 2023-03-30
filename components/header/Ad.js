import Link from "next/link";
import styles from './style.module.scss';

export default function Ad() {
  return (
    <Link to="/browse">
        <div className={styles.ad}/>
    </Link>
  );
}
