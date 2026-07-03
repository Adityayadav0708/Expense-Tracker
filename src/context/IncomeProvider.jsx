import IncomeContext from './IncomeContext'
import { useState,useEffect } from 'react'

function IncomeProvider({children}){

 // income tracker
  const [incomeTitle, setIncomeTitle] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");

  const [incomes, setIncomes] = useState(() => {
    return JSON.parse(localStorage.getItem("incomes")) || [];
  });
  function addIncome() {
    const newIncome = {
      id: Date.now(),
      title: incomeTitle,
      amount: Number(incomeAmount),
    };

    setIncomes([...incomes, newIncome]);

    setIncomeTitle("");
    setIncomeAmount("");
  }
  useEffect(() => {
    localStorage.setItem("incomes", JSON.stringify(incomes));
  }, [incomes]);

  const totalIncome = incomes.reduce((total, income) => {
    return total + income.amount;
  }, 0);



return (
<IncomeContext.Provider value={{
incomeTitle,
setIncomeTitle,
incomeAmount,
setIncomeAmount,    
addIncome,
incomes,
totalIncome



}}>
{children}
</IncomeContext.Provider>

) }
export default IncomeProvider