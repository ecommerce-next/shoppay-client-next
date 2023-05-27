import axios from "axios";

export const uploadImages = async (formData) => {
    try {
        const {data} = await axios.post("/api/cloudinary", formData, {
            headers: {
                "content-type": "multipart/form-data",
            },
        });
        return data;
    } catch (error) {
        return error.message;
    }
};
