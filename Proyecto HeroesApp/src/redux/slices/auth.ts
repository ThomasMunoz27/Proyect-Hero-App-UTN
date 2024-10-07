import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IInitialState{
    user:string|null
    isLogged:boolean
}

const initialState: IInitialState = {
    user:null,
    isLogged:false
}

const AuthUser = createSlice({
    name:"AuthUser",
    initialState,
    reducers:{
        setLogin:(state, action:PayloadAction<string>) =>{
            state.user = action.payload
            state.isLogged = true
        },
        setLogOut:(state) =>{
            state.user = null
            state.isLogged = false
        }
    }
})

export const {setLogin, setLogOut} = AuthUser.actions

export default AuthUser.reducer