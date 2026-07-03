import{useContext} from "react";
import ExpenseContext from "../../context/ExpenseContext";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
// function Chart({ expenses }) {
function Chart() {
  const {expenses}= useContext(ExpenseContext);

  // Group expenses by category
  const categoryData = expenses.reduce((acc, expense) => {
    const found = acc.find(
      (item) => item.name === expense.category
    );

    if (found) {
      found.value += expense.amount;
    } else {
      acc.push({
        name: expense.category,
        value: expense.amount,
      });
    }

    return acc;
  }, []);

  // Colors for Pie Chart
  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#AF19FF",
    "#FF4560",
  ];

  return (
    <div className="chart-container">
      <h2>Expense Chart</h2>

      {expenses.length === 0 ? (
        <p>No expenses available.</p>
      ) : (
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={categoryData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              label
            >
              {categoryData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default Chart;