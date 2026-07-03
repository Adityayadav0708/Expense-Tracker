import React from "react";

function ExpenseList({
  sortedExpenses,
  search,
  searchCategory,
  removeExpense,
  editExpense
}) {
  return (
    <div className="expense-list-section card-panel">
      <h2>Expenses List</h2>
      <div className="expense-list-items">
        {sortedExpenses
          .filter((expense) => {
            const matchSearch = expense.title
              .toLowerCase()
              .includes(search.toLowerCase());
            const matCategory =
              searchCategory === "All" || expense.category === searchCategory;
            return matchSearch && matCategory;
          })
          .map((expense) => (
            <div key={expense.id} className="expense-item">
              <h3>{expense.title}</h3>
              <p>amount: {expense.amount}</p>
              <p>Category: {expense.category}</p>
              <p>Date: {expense.date}</p>
              <button onClick={() => removeExpense(expense.id)}>
                Remove expense
              </button>
              <button onClick={() => editExpense(expense.id)}>
                Edit expense
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ExpenseList;
