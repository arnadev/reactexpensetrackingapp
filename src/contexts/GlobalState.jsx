import { createContext } from "react";
import {  useReducer } from "react";
import AppReducer from "./AppReducer";

const getInitialTransactions=()=>{
    const transactions = [];
    
    // Loop through all the keys in localStorage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      
      // Check if the key starts with 'transaction'
      if (key && key.startsWith('transaction')) {
        const transactionData = localStorage.getItem(key);
        
        // Parse the JSON data and push it into the transactions array
        try {
          const transaction = JSON.parse(transactionData);
          
          // Extract the numeric part from the key (e.g., 'transaction1' -> 1)
          const transactionId = parseInt(key.replace('transaction', ''), 10);
          
          // Add the transaction with the id to the transactions array
          transactions.push({ transactionId, transaction });
        } catch (e) {
          console.error("Error parsing transaction data for key:", key, e);
        }
      }
    }
  
    // Sort the transactions array by the transactionId
    transactions.sort((a, b) => b.transactionId - a.transactionId);
  
    // Return only the transaction objects, without the transactionId
    return transactions.map(item => item.transaction);
}
  

const initialState={
    transactions: getInitialTransactions()
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