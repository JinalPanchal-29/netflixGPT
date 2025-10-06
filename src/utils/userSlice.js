import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        signInUser: (state,action) => {
            return action.payload
        },
        signOutUser: (state, action) => {
            return null;
        }
    }
})

export const {signInUser, signOutUser} = userSlice.actions
export default userSlice.reducer;