import axios from "axios";

export const saveCartQuery = async (cart) => {
    try {
        const { data } = await axios.post("/api/cart/saveCart", {
            cart,
        });
        return data;
    } catch (err) {
        return err.message;
    }
};


// export const updateCartQuery = async (payload) => {
//     try {
//         const { data } = await axios.patch("/api/cart/updateCart", {
//             payload,
//         });
//         return data;
//     } catch (err) {
//         return err.message;
//     }
// };