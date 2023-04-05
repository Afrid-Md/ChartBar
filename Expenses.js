
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from './ExpensesChart';

const Expenses=(props)=>{
  const[filteredYear,setFilteredYear]=useState('2023');

  const filterChangeHandler=(selectedyear)=>{
      setFilteredYear(selectedyear);
  }
  
  const filteredExpenses=props.items.filter((expense)=>{
    return expense.date.getFullYear().toString()===filteredYear;
  })



    return(
<Card className="expenses">
  <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
  <ExpenseChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
</Card>
    );

}
export default Expenses;