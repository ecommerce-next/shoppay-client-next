import axios from "axios";

export const applyCoupon = async (coupon) => {
    const { data } = await axios.post("/api/user/applyCoupon", {
        coupon,
    });
    return data;
};
