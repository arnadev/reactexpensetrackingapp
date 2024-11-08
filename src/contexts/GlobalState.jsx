import { createContext } from "react";
import {  useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState={
    transactions: []
};

export const GlobalContext=createContext(initialState);

export const GlobalProvider=(props)=>{
    const[state,dispatch]=useReducer(AppReducer,initialState);

    const deleteTransaction=(id)=>{
        dispatch({
            type:'DELETE_TRANSACTION',
            payload: id
        });
    };

    const addTransaction=(text,amount)=>{
        dispatch({
            type:'ADD_TRANSACTION',
            payload: {text,amount}
        });
    };

    return(
        <GlobalContext.Provider value={{transactions: state.transactions,deleteTransaction,addTransaction}}>
            {props.children}
        </GlobalContext.Provider>
    );
};