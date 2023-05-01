import React from 'react';
import Header from "../components/header";

const country = {
    name: "United State",
        flag: "https://www.seekpng.com/png/full/3-34817_picture-download-american-flag-clipart-no-background-transparent.png",
};
const Cart = () => {
    return (
        <>
            <Header country={country}/>
            CART
        </>
    );
};

export default Cart;