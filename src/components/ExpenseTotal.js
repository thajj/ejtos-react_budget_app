import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (
        <div class="card mb-4 rounded-3 shadow-sm border-primary">
          <div class="card-header py-3 text-white bg-primary border-primary">
            <h4 class="my-0 fw-normal">Spent so far</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title"><small class="text-muted fw-light">£</small>{totalExpenses}</h1>
          </div>
        </div>
    );
};
export default ExpenseTotal;
