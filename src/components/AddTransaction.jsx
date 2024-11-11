import { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";

const AddTransaction=()=>{
    const [form,setForm]=useState(false);
    const [text,setText]=useState('');
    const [amount,setAmount]=useState(null);
    const {addTransaction}=useContext(GlobalContext);

    const submitForm=(e)=>{
        e.preventDefault();
        console.log(amount);
        if(amount===null || amount==='0' || text==='' || text===null){
            return;
        }
        addTransaction(text,Number(amount));
        setText('');
        setAmount('');


    }
    return(
        <div className="add-transaction">
        <h1 onClick={()=>setForm(!form)}>Add New Transaction {form?'':'⇩'}</h1>
        {form && 
        <form onSubmit={(e)=>submitForm(e)}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..."></input>
                <label htmlFor="amount" >Amount ||+ for income || - for expense||</label>
                <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}></input>
            </div>
            <button className="add-transaction-btn" >Add Transaction</button>
        </form>
        }
        </div>
    );
};

export default AddTransaction;