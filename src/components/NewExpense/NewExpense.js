import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [newExpenseContent, setNewExpenseContent] = useState("button");

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  

  };
  const cancelDisplay = (displayedForm) => {
      console.log(displayedForm);
      setNewExpenseContent(displayedForm);
  };

  const addFormHandler = () => {
    setNewExpenseContent("form");
}



return (
  <div className="new-expense">
    {newExpenseContent === "button" ? (
      <button onClick={addFormHandler}>Add New Expense</button>
    ) : (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onDisplayForm={cancelDisplay} />
    )}
  </div>
);
};

export default NewExpense;
