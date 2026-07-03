import React from "react";

function Budget(
    {
        budget,
        setBudget,
        remainingBudget,
        totalExpense,
        percentage,
        exceededAmount
    }
) {
  return (
    <div className="budget-card card-panel">
      <h2>Budget Summary</h2>

      <input
        type="number"
        placeholder="Enter Monthly Budget"
        value={budget}
        onChange={(e) =>
          setBudget(Number(e.target.value))
        }/>

      <p>Budget : ₹{budget}</p>

      <p>Remaining : ₹{remainingBudget}</p>

      {
        totalExpense > budget && (
          <h3>
            ⚠ Budget Exceeded by ₹{exceededAmount}
          </h3>
        )
      }
      <div className="progress">
        <div
          className="progress-bar"
          style={{
            width: `${percentage}%`
          }}
        ></div>
      </div>
    </div>
  );
}

export default Budget;
