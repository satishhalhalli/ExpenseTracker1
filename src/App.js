import ExpenseItem from "./components/Expenseitem";

function App() {


  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location : 'Banglore',
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) , location : 'Hyd',},
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location : 'Mumbai',
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      location : 'london',
    },
  ];
  return (

    <div>
      <h2>Let's get started!</h2>
      {/* <ExpenseItem
      title={expenses[0].title}
      amount={expenses[0].amount}
      date={expenses[0].date}
      loc={expenses[0].location}
      ></ExpenseItem>
      <ExpenseItem
      title={expenses[1].title}
      amount={expenses[1].amount}
      date={expenses[1].date}
      loc={expenses[1].location}
      ></ExpenseItem>
      <ExpenseItem
      title={expenses[2].title}
      amount={expenses[2].amount}
      date={expenses[2].date}
      loc={expenses[2].location}
      ></ExpenseItem>
      <ExpenseItem
      title={expenses[3].title}
      amount={expenses[3].amount}
      date={expenses[3].date}
      loc={expenses[3].location}
      ></ExpenseItem> */}
       {expenses.map(expense => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          loc={expense.location}
        />
      ))}
    </div>
  );
}

export default App;
