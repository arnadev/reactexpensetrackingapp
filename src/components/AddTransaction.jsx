import { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";

const AddTransaction=()=>{
    const [text,setText]=useState('');
    const [amount,setAmount]=useState(0);
    const {addTransaction}=useContext(GlobalContext);

    const submitForm=(e)=>{
        e.preventDefault();
        addTransaction(text,Number(amount));
        setText('');
        setAmount(0);
    }
    return(
        <>
        <h1>Add New Transaction</h1>
        <form onSubmit={(e)=>submitForm(e)}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..."></input>
                <label htmlFor="amount" >Amount<br/>||+ for income || - for expense||</label>
                <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}></input>
            </div>
            <button className="add-transaction-btn" >Add Transaction</button>
        </form>
        </>
    );
};

export default AddTransaction;