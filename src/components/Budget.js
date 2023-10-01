import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    return (
        <div class="card mb-4 rounded-3 shadow-sm border-secondary">
        <div class="card-header py-3 text-white bg-secondary border-secondary">
          <h4 class="my-0 fw-normal">Budget</h4>
        </div>
        <div class="card-body">
        
        <div class="input-group">
            <span class="input-group-text" id="basic-addon1">£</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}  class="form-control" placeholder="Amount" ></input>
        </div>

        </div>
      </div>
    );
};
export default Budget;