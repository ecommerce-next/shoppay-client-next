import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSession, signIn} from "next-auth/react";
import {saveCartQuery, updateCartQuery} from "../queries/cart";
import styles from "../styles/cart.module.scss";
import Header from "../components/cart/header";
import CartHeader from "../components/cart/cartHeader";
import Empty from "../components/cart/empty";
import Product from "../components/cart/product";
import Checkout from "../components/cart/checkout";
import PaymentMethods from "../components/cart/paymentMethods";
import ProductsSwiper from "../components/productsSwiper";
import {women_swiper} from "../data/home";
import {updateCart} from "../store/cartSlice";
import axios from "axios";

const Cart = () => {
    const Router = useRouter();
    const {data: session} = useSession();
    const [selected, setSelected] = useState([]);
    console.log(selected, "selected")
    const {cart} = useSelector((state) => ({...state}));
    const dispatch = useDispatch();
    //-----------------------
    const [shippingFee, setShippingFee] = useState(0);
    const [subtotal, setSubtotal] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setShippingFee(selected.reduce((a, c) => a + Number(c.shipping), 0).toFixed(2));
        setSubtotal(selected.reduce((a, c) => a + c.price * c.qty, 0).toFixed(2));
        setTotal((selected.reduce((a, c) => a + c.price * c.qty, 0) + Number(shippingFee)).toFixed(2));
    }, [selected]);

    useEffect(() => {
        const update = async () => {
            const {data} = await axios.patch("/api/cart/updateCart", {
                products: cart.cartItems,
            });
            // const {data} = await updateCartQuery({products: cart.cartItems});
            dispatch(updateCart(data));
        };
        if (cart.cartItems?.length > 0) {
             update();
        }
    }, []);

    //-----------------------
    const saveCartToDbHandler = async () => {
        if (session) {
            await saveCartQuery(selected);
            await Router.push("/checkout");
        } else {
            await signIn();
        }
    };

    return (
        <>
            <Header/>
            <div className={styles.cart}>
                {cart.cartItems?.length > 0 ? (
                    <div className={styles.cart__container}>

                        <CartHeader
                            cartItems={cart.cartItems}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <div className={styles.cart__products}>
                            {cart.cartItems.map((product) => (
                                <Product
                                    product={product}
                                    key={product._uid}
                                    selected={selected}
                                    setSelected={setSelected}
                                />
                            ))}
                        </div>
                        <Checkout
                            subtotal={subtotal}
                            shippingFee={shippingFee}
                            total={total}
                            selected={selected}
                            saveCartToDbHandler={saveCartToDbHandler}
                        />
                        <PaymentMethods/>
                    </div>
                ) : (
                    <Empty/>
                )}
                <ProductsSwiper products={women_swiper}/>
            </div>
        </>
    );
};

export default Cart;