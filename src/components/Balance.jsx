import { GlobalContext } from "../contexts/GlobalState";
import { useContext } from "react";

const Balance=()=>{
    const {transactions}=useContext(GlobalContext);
    const amount=transactions.map(transaction=>transaction.amount);
    const balance=amount.length>0?amount.reduce((acc,item)=>acc+=item).toFixed(2):0;
    return(
        <div className="balance-container">
            <h4>Current Balance</h4>
            <h1>₹{balance}</h1>
        </div>
    );
};

export default Balance;