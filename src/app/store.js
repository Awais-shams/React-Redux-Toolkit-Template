import { configureStore } from "@reduxjs/toolkit";
import ModelSliceReducer from "../features/model-slice/ModelSlice";
import LoginSliceReducer from "../features/login-slice/LoginSlice";

const store=configureStore({
    reducer:{
        model:ModelSliceReducer,
        login:LoginSliceReducer
    }
})

export default store