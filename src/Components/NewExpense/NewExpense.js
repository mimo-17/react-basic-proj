import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };



  const startEditingHandler = () => {
    fetch('https://react-basic-8cf3a-default-rtdb.asia-southeast1.firebasedatabase.app/tm_user.json').then(data => {
      return data.json();
    } ).then(data => {
      console.log("Inside data")
      for (const key in data) {
        console.log(data[key]);
      }
    }).catch(ex => {
      console.log(ex);
    });  

    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={startEditingHandler} >Add Expense</button>)}
      {isEditing && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler} />
      )}
    </div>
  );
};

export default NewExpense;