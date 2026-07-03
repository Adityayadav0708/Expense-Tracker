

// here using props to pass the data from parent component to child component
function DashboardSummary(
    {
        totalExpense,
        totalIncome,
        balance,
        totalTransactions,
        highestExpense,
        lowestExpense,
        averageExpense
    }
) {
  return (
    <div>
      <h2>Dashboard Summary</h2>

      <div className="dashboard">
        <div className="card">
          <h3>Total Expense</h3>
          <p>₹{totalExpense}</p>
        </div>

        <div className="card">
          <h3>Total Transactions</h3>
          <p>{totalTransactions}</p>
        </div>

        <div className="card">
          <h3>Highest Expense</h3>
          <p>₹{highestExpense}</p>
        </div>

        <div className="card">
          <h3>Lowest Expense</h3>
          <p>₹{lowestExpense}</p>
        </div>
<div className="card">
          <h3>Total Income</h3>
          <p>₹{totalIncome}</p>
        </div>

        <div className="card">
          <h3>Balance</h3>
          <p>₹{balance}</p>
        </div>
        <div className="card">
          <h3>Average Expense</h3>
          <p>₹{averageExpense}</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardSummary;
