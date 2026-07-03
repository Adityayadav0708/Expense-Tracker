function Csv({expenses}) {
    function exportCSV(){
        const headers = ['Title', 'Amount', 'Category', 'Date'];
        const rows=expenses.map((expense)=>[
            expense.title,
            expense.amount,
            expense.category,
            expense.date
        ]);
        const csvContent=[headers,...rows]
        .map((row)=>row.join(","))
        .join("\n");
//create actual csv file in memory
        const blob=new Blob([csvContent],

            { type:"text/csv;charset=utf-8;"}
        );
            //create a link to download the csv file
      const url=URL.createObjectURL(blob);
      const link=document.createElement("a");  
      link.href=url;
      link.download="expenses.csv"; //dirct download kr do page bagera mat kholo
      link.click(); // auto click no need to click
      URL.revokeObjectURL(url); //temp csv file ko delete kr do after dowm;oading
        
        }
    
  return (
    <div className="csv-export-container">
      <button onClick={exportCSV}>Export CSV</button>
    </div>
  )
}

export default Csv
