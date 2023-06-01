import axios from "axios";

export const saveAddress = async (address, userId) => {
  try {
    const { data } = await axios.post("/api/address/createAddress", {
      address,
      userId,
    });
    return data;
  } catch (error) {
    return error.message;
  }
};

export const changeActiveAddress = async (id) => {
  try {
    const { data } = await axios.put("/api/address/updateAddress", {
      id,
    });
    return data;
  } catch (error) {
    return error.message;
  }
};

export const deleteAddress = async (id) => {
  try {
    const { data } =  await axios.delete(`/api/address/deleteAddress/${id}`);
    return data;
  } catch (error) {
    return error.message;
  }
};

