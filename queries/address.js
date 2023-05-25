import axios from "axios";

export const saveAddress = async (address, userId) => {
  try {
    const { data } = await axios.post("/api/address/saveAddress", {
      address,
      userId,
    });
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};

export const changeActiveAddress = async (id) => {
  try {
    const { data } = await axios.put("/api/address/manageAddress", {
      id,
    });
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};

export const deleteAddress = async (id) => {
  try {
    const { data } = await axios.delete("/api/address/deleteAddress", {
      data: { id },
    });
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};

