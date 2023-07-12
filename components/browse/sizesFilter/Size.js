import styles from "../styles.module.scss";

export default function Size({size, sizeHandler}) {
    return (
        <label htmlFor={size} className={styles.filter__sizes_size}>
            <input
                type="checkbox"
                name="size"
                id={size}
                onChange={() => sizeHandler(size)}
            />
            <label htmlFor={size}>{size}</label>
        </label>
    );
}
