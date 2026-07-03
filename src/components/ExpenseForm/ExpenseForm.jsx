import React from "react";

function ExpenseForm({
  title,
  setTitle,
  amount,
  setAmount,
  category,
  setCategory,
  date,
  setDate,
  addExpense,
  editindex
}) {
  return (
    <div className="expense-form-card card-panel">
      <h2>{editindex === null ? 'Add Expense' : 'Edit Expense'}</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
   
      <button onClick={addExpense}>
        {editindex === null ? 'Add expense' : 'Update expense'}
      </button>
    </div>
  );
}

export default ExpenseForm;
