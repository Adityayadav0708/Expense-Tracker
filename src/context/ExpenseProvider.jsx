import { useState,useEffect } from "react";
import ExpenseContext from "./ExpenseContext";

function ExpenseProvider({ children }) {



    
 const [expenses, setExpenses] = useState(()=>{
    return JSON.parse(localStorage.getItem('expenses')) || [];
  })


useEffect(() => {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}, [expenses]);

  //total expense
  const totalExpense=expenses.reduce((total,expense)=>{
    return total+(expense.amount);
  },0);





return(
    <ExpenseContext.Provider value={{ expenses,
     setExpenses ,
     totalExpense
     
     
     }}>
  {children}
    </ExpenseContext.Provider>
)}
export default ExpenseProvider