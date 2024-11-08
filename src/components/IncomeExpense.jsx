import { GlobalContext } from "../contexts/GlobalState";
import { useContext } from "react";

const IncomeExpense=()=>{
    const {transactions}=useContext(GlobalContext);
    const amount=transactions.map(transaction=>transaction.amount);
    const incomes=amount.filter(item=>item>0);
    const income=incomes.length>0?incomes.reduce((acc,item)=>acc+=item).toFixed(2):0;
    const expenses=amount.filter(item=>item<0);
    const expense=expenses.length>0?expenses.reduce((acc,item)=>acc+=item).toFixed(2):0;


    return(
        <div className="income-expense">
            <div className="income-container">
                <h2>INCOME</h2>
                <div>₹{income}</div>
            </div>
            <div className="expense-container">
                <h2>EXPENSE</h2>
                <div>₹{expense}</div>
            </div>
        </div>
    );
};

export default IncomeExpense;