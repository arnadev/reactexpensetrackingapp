import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";

const Transaction=({transaction})=>{
    const {deleteTransaction}=useContext(GlobalContext);
    const sign=transaction.amount<0?'-':'+';
    return(
        <li className={sign==='-'?"minus":"plus"}>
            {transaction.text} <span>{sign}₹{Math.abs(transaction.amount)}</span><button className="delete-btn" onClick={(e)=>{deleteTransaction(transaction.id)}}>X</button>
        </li>
    );
};

export default Transaction;