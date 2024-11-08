const AppReducer=(state,action)=>{
    switch(action.type){

        case 'DELETE_TRANSACTION':
            return{
                ...state,
                
                transactions: state.transactions.filter(transaction=>transaction.id!==action.payload)
            }

        case 'ADD_TRANSACTION':
            const transaction={id:state.transactions.length+1,text:action.payload.text,amount:action.payload.amount};
            console.log(transaction);
            return{
                ...state,

                transactions: [transaction,...state.transactions]
            }

        default:
            return state;
    }
};

export default AppReducer;