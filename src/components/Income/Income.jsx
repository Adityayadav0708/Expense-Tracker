import {useContext} from 'react'
import IncomeContext from '../../context/IncomeContext'


function Income()


{
const {incomeTitle,setIncomeTitle,incomeAmount,setIncomeAmount,addIncome,incomes}=useContext(IncomeContext)



  return (
    <div className="income-card card-panel">
      <h2>Add Income</h2>
      <input
        type="text"
        placeholder="Title"
        value={incomeTitle}
        onChange={(e) => setIncomeTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={incomeAmount}
        onChange={(e) => setIncomeAmount(e.target.value)}
      />
      <button onClick={addIncome}>Add Income</button>

      <h2>Income List</h2>

      {incomes.map((income) => (
        <div key={income.id}>
          <h3>{income.title}</h3>
          <p>₹{income.amount.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}

export default Income;
