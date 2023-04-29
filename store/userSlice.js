import {createSlice} from "@reduxjs/toolkit";

const initialState = {
        login_email: "",
        login_password: "",
        name: "",
        email: "",
        password: "",
        conf_password: "",
        success: "",
        error: "",
        login_error: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action) {
            state = action.payload;
        },
    }
});

export const {setUser} = userSlice.actions;

export default userSlice.reducer;
