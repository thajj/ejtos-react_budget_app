import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Remaining = () => {
    const { expenses, budget } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'danger' : 'success';
    return (
        <div class={`card mb-4 rounded-3 shadow-sm border-${alertType}`}>
            <div class={`card-header py-3 text-white bg-${alertType} border-${alertType}`}>
                <h4 class="my-0 fw-normal">Remaining</h4>
            </div>
            <div class="card-body">
                <h1 class="card-title pricing-card-title"><small class="text-muted fw-light">£</small>{budget - totalExpenses}</h1>
            </div>
        </div>
    );
};
export default Remaining;
