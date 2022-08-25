import { createSlice } from "@reduxjs/toolkit";

const initialState={
    email:'',
    password:'',
    key:null,
}

const LoginSlice=createSlice({
    name:'LoginSlice',
    initialState,
    reducers:{
        emailHandler:(state,action)=>{
            state.email=action.payload
        },
        passwordHandler:(state,action)=>{
            state.password=action.payload

        },
        loginHandler:(state)=>{
            state.key="afc651af-79a0-44dd-bd53-539ecafb1538"
            // window.localStorage.setItem('encryptedKey',state.key)
        }
    }
})

export default LoginSlice.reducer

export const{emailHandler,passwordHandler,loginHandler}=LoginSlice.actions