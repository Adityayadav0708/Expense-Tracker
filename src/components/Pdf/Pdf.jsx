import {jsPDF} from 'jspdf'
import { useContext } from 'react';
import ExpenseContext from '../../context/ExpenseContext';
// function Pdf({expenses,totalExpense}) {

function Pdf(){
const {expenses ,totalExpense}=useContext(ExpenseContext)
 function exportPDF() {

    const doc = new jsPDF();// create vblank pdf

    doc.setFontSize(20);

    doc.text("Expense Report", 20, 20); //x=20,y=20 expense report

    doc.setFontSize(12);

    let y = 40; //curnet writing pos every expense goes lower
// after every expense we increase y by 10 to preevent oeverlp
    expenses.forEach((expense) => {
//print krega inside pdf
      doc.text(
        `${expense.title}   ₹${expense.amount}  
         ${expense.category}   ${expense.date}`,
        20,
        y
      );

      y += 10;// move cursor down
    });
y += 10;

    doc.setFontSize(16);

    doc.text(`Total Expense : ₹${totalExpense}`,20,y);

    doc.save("Expense_Report.pdf");
  
}
 return (
    <div className="pdf-export-container">
      <button onClick={exportPDF}>Export PDF</button>

    </div>
 )}
export default Pdf
