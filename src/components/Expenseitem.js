import './ExpenseItem.css';

function ExpenseItem(props){

    // const expenseDate =new Date(2021,3,28);
    // const expenseTitle='car-insurence';
    // const expenseAmount=295.6;
    // const locationExpense='Bear';
    return (
        <div className='expense-item'>
            <div>{props.date.toISOString()}</div>
            <div className='expense-item__description'>
               
                <h2>{props.title} </h2>
                <h2>{props.loc} </h2>
                
                <div className='expense-item__price'>{props.amount}</div>
                
            </div>
        </div>
    );
}

export default ExpenseItem;