import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    registeredUser: {},
        // login_email: "",
        // login_password: "",
        // name: "",
        // email: "",
        // password: "",
        // conf_password: "",
        // success: "",
        // error: "",
        // login_error: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserR(state, action) {
            state.registeredUser = action.payload;
        },
    }
});

export const {setUserR} = userSlice.actions;

export default userSlice.reducer;
