import axios from "axios";

export const signupQuery = async (address, userId) => {
    try {
        const { data } = await axios.post("/api/address/saveAddress", {
            address,
            userId,
        });
        return data;
    } catch (error) {
        return error.message;
    }
};