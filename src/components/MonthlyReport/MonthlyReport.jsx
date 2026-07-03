import  { useContext } from 'react';
import ExpenseContext from '../../context/ExpenseContext';  

// function MonthlyReport({ expenses }) { we are not using props
function MonthlyReport() {
const{expenses}=useContext(ExpenseContext)
  const monthlyData={};

  expenses.forEach((expense) => {
    const date=new Date(expense.date);
    const month=date.toLocaleString('default',
        {month:'long',
            year:'numeric'});
    if(monthlyData[month]){
        monthlyData[month]+=expense.amount;
    }
    else{
        monthlyData[month]=expense.amount;
    }
  });
   
  return (
    <div className="monthly-report-card card-panel">
      <h2>Monthly Expense Report</h2>
      {/* //cannot apply map on object so we use Object.entries to convert the object into an array of key-value pairs, which can then be mapped over to render the monthly expense report. */}
      {Object.entries(monthlyData).map(([month, total]) => (
        <div key={month}>
          <h3>{month}</h3>
          <p>Total Expense : ₹{total}</p>
        </div>
      ))}
    </div>
  )
}

export default MonthlyReport
