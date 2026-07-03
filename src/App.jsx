import { useState, useEffect } from 'react'
import './App.css'

// Restructured existing components
import Pdf from './components/Pdf/Pdf'
import DashboardSummary from './components/DashboardSummary/DashboardSummary' 
import Budget from './components/Budget/Budget'
import Chart from './components/Chart/Chart'
import Income from './components/Income/Income'
import MonthlyReport from './components/MonthlyReport/MonthlyReport'


// Newly created components
import ExpenseForm from './components/ExpenseForm/ExpenseForm'
import ExpenseList from './components/ExpenseList/ExpenseList'
import SearchBar from './components/SearchBar/SearchBar'
import Filter from './components/Filter/Filter'
import Sort from './components/Sort/Sort'



// ContextAPI
import{ useContext } from "react";
import ExpenseContext from "./context/ExpenseContext";

import IncomeContext from './context/IncomeContext'



function App() {
//CONTEXT API
const {expenses,setExpenses,totalExpense}= useContext(ExpenseContext);
  //usecontexapi

const{totalIncome}=useContext(IncomeContext);




  // const [expenses, setExpenses] = useState(()=>
  //   return JSON.parse(localStorage.getItem('expenses')) || [];
  // })

  // dark mode
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("darkMode")) || false;
  });

  const[editindex, setEditIndex] = useState(null) 

  const[title, setTitle] = useState('')
  const[amount, setAmount] = useState('')   
  const[category, setCategory] = useState('')
  const[date, setDate] = useState('')

  // search by category (initialized to "All")
  const [searchCategory, setSearchCategory] = useState("All");
  // sort by cat
  const[sortBy, setSortBy] = useState("");

  const [search, setSearch] = useState("");

  function addExpense(){
    const newExpense={
      id: editindex === null ? Date.now() :  expenses[editindex].id,
      title,
      amount: Number(amount),
      category,
      date,
    };
    if(editindex ===null){
      setExpenses([...expenses,newExpense])
      console.log(expenses)
    }
    else{
      const updexp=[...expenses];
      updexp[editindex]=newExpense;
      setExpenses(updexp); 
      setEditIndex(null); 
    }
    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
  }

  //remove expense
  function removeExpense(id){
    const updexp=expenses.filter((expense)=>{return expense.id!==id});
    setExpenses(updexp);
  }

  //edit expense
  function editExpense(id){
    const expense=expenses.find((expense)=>{
      return expense.id===id});

    const index=expenses.findIndex((expense)=>{
      return expense.id===id});

    setTitle(expense.title);
    setAmount(expense.amount);
    setCategory(expense.category);
    setDate(expense.date);
    setEditIndex(index);
  }

  //total expense   DONE IN CONTEXT PROVIDER
  // const totalExpense=expenses.reduce((total,expense)=>{
  //   return total+(expense.amount);
  // },0);

  //save to local storage    DO THIS IN EXPENSEPROVIDER
  // useEffect(()=>{
  //   localStorage.setItem('expenses',JSON.stringify(expenses));},[expenses]);

  //dark mode
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // sort expenses
  const sortedExpenses = [...expenses];
  if(sortBy === "lowToHigh") {
    sortedExpenses.sort((a,b)=>a.amount - b.amount);
  } else if(sortBy === "highToLow") {
    sortedExpenses.sort((a,b)=>b.amount - a.amount);
  } else if(sortBy === "newest") {
    sortedExpenses.sort((a,b)=>new Date(b.date)-new Date(a.date))
  } else if(sortBy === "oldest") {
    sortedExpenses.sort((a,b)=>new Date(a.date)-new Date(b.date))
  }else if(sortBy ==="aToZ"){
    sortedExpenses.sort((a,b)=>a.title.localeCompare(b.title));
  }
  if (sortBy === "zToA") {
    sortedExpenses.sort((a, b) =>
      b.title.localeCompare(a.title)
    );
  }

  //dashboard 
  const totalTransactions = expenses.length;

  const highestExpense =
    expenses.length > 0
      ? Math.max(...expenses.map((expense) => expense.amount))
      : 0;

  const lowestExpense =
    expenses.length > 0
      ? Math.min(...expenses.map((expense) => expense.amount))
      : 0;

  const averageExpense =
    expenses.length > 0
      ? (totalExpense / expenses.length).toFixed(2)
      : 0;

  // Budget
  const [budget ,setBudget]=useState(()=>{
    return Number(localStorage.getItem("budget")) ||"";
  })
  useEffect(() => {
    localStorage.setItem("budget", budget);
  }, [budget]);

  const remainingBudget = budget - totalExpense;

  const exceededAmount =
    totalExpense > budget
      ? totalExpense - budget
      : 0;

  const percentage =
    budget > 0
      ? Math.min((totalExpense / budget) * 100, 100)
      : 0;

  // income tracker
  // const [incomeTitle, setIncomeTitle] = useState("");
  // const [incomeAmount, setIncomeAmount] = useState("");

  // const [incomes, setIncomes] = useState(() => {
  //   return JSON.parse(localStorage.getItem("incomes")) || [];
  // });
  // function addIncome() {
  //   const newIncome = {
  //     id: Date.now(),
  //     title: incomeTitle,
  //     amount: Number(incomeAmount),
  //   };

  //   setIncomes([...incomes, newIncome]);

  //   setIncomeTitle("");
  //   setIncomeAmount("");
  // }
  // useEffect(() => {
  //   localStorage.setItem("incomes", JSON.stringify(incomes));
  // }, [incomes]);

  // const totalIncome = incomes.reduce((total, income) => {
  //   return total + income.amount;
  // }, 0);

 const balance = totalIncome - totalExpense;

  return (
    <div className={darkMode ? "dark" : "light"}>
      <div className="header-bar">
        <h1>Expense Tracker</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <DashboardSummary
        totalIncome={totalIncome}
        balance={balance}
        totalExpense={totalExpense}
        totalTransactions={totalTransactions}
        highestExpense={highestExpense}
        lowestExpense={lowestExpense}
        averageExpense={averageExpense}
      />

      <div className="dashboard-grid">
        <div className="dashboard-sidebar">
          <ExpenseForm
            title={title}
            setTitle={setTitle}
            amount={amount}
            setAmount={setAmount}
            category={category}
            setCategory={setCategory}
            date={date}
            setDate={setDate}
            addExpense={addExpense}
            editindex={editindex}
          />

          <Budget
            budget={budget}
            setBudget={setBudget}
            remainingBudget={remainingBudget}
            exceededAmount={exceededAmount}
            percentage={percentage}
            totalExpense={totalExpense}
          />

          <Income
            // incomeTitle={incomeTitle}
            // setIncomeTitle={setIncomeTitle}
            // incomeAmount={incomeAmount}
            // setIncomeAmount={setIncomeAmount}
            // addIncome={addIncome}
            // incomes={incomes}
          />
        </div>

        <div className="dashboard-main">
          <div className="chart-and-report-row">
            {/* <Chart expenses={expenses} /> */}
            <Chart />



            {/* <MonthlyReport expenses={expenses}/> */}
         <MonthlyReport/>
         
          </div>

          <div className="controls-and-export card-panel">
            <div className="controls-row">
              <SearchBar search={search} setSearch={setSearch} />
              <Filter searchCategory={searchCategory} setSearchCategory={setSearchCategory} />
              <Sort sortBy={sortBy} setSortBy={setSortBy} />
            </div>

            <div className="export-row">
              {/* < expenses={expenses}/> */}
              <Pdf
                // expenses={expenses}
                // totalExpense={totalExpense}
              />
            </div>
          </div>

          <div className="total-expense-highlight-card card-panel">
            <h2>Total Expense: ₹{totalExpense}</h2>
          </div>

          <ExpenseList
            sortedExpenses={sortedExpenses}
            search={search}
            searchCategory={searchCategory}
            removeExpense={removeExpense}
            editExpense={editExpense}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
