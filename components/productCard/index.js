import {useEffect} from "react";
import {useState} from "react";
import ProductSwiper from "./ProductSwiper";
import styles from "./styles.module.scss";
import Link from "next/link";

export default function ProductCard({product}) {
    const [active, setActive] = useState(0);
    const [images, setImages] = useState(product.subProducts[active]?.images);
    const [prices, setPrices] = useState(
        product.subProducts[active]?.sizes
            .map(s => s.price)
            .sort((a, b) => a - b)
    );
    const [stylesColors, setStylesColors] = useState(product.subProducts.map(p=> p.color));

    useEffect(() => {
        setImages(product.subProducts[active].images);
        setPrices(
            product.subProducts[active]?.sizes
                .map(s => s.price)
                .sort((a, b) => a - b)
        );
    }, [active, product]);

    return (
        <div className={styles.product}>
            <div className={styles.product__container}>
                <Link href={`/product/${product.slug}?style=${active}`} target="_blank">
                    <div>
                        <ProductSwiper images={images}/>
                    </div>
                </Link>

                {product.subProducts[active].discount ? (
                    <div className={styles.product__discount}>
                        -{product.subProducts[active].discount}%
                    </div>
                ) : (
                    ""
                )}
                <div className={styles.product__infos}>
                    <h1>
                        {product.name.length > 45
                            ? `${product.name.substring(0, 45)}...`
                            : product.name}
                    </h1>
                    <span>
            {prices.length === 1
                ? `USD${prices[0]}$`
                : `USD${prices[0]}-${prices[prices.length - 1]}$`}
          </span>
                    <div className={styles.product__colors}>
                        {stylesColors &&
                            stylesColors.map((style, i) =>
                                style.image ? (
                                    <img
                                        key={style.image}
                                        src={style.image}
                                        // className={i == active && styles.active}
                                        onMouseOver={() => {
                                            setImages(product.subProducts[i].images);
                                            setActive(i);
                                        }}
                                        alt=""
                                    />
                                ) : (
                                    <span
                                        key={style.image}
                                        style={{backgroundColor: `${style.color}`}}
                                        onMouseOver={() => {
                                            setImages(product.subProducts[i].images);
                                            setActive(i);
                                        }}
                                    ></span>
                                )
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
}
