import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';

const App = () => {
    return (
        <AppProvider>
            <nav className="p-3 bg-dark text-white shadow">
                <div className="container d-flex flex-wrap">
                    <h1 className=''>Company's Budget Allocation</h1>
                </div>
            </nav>
            <header className="pt-3 bg-white border-bottom shadow-sm">

                <div className="container text-center ">
                    <div class="row">
                        <div class="col">
                            <Budget />
                        </div>
                        <div class="col">
                            <RemainingBudget />
                        </div>
                        <div class="col">
                            <ExpenseTotal />
                        </div>
                    </div>
                </div>
            </header>

            <div className="container pb-3 pt-3">
                <div className="row">
                    <div className="col-8">
                        <div className="card">
                            <div className="card-header">Allocation</div>
                            <div className="card-body">
                                <ExpenseList />
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-header">Change allocation</div>
                            <AllocationForm />
                        </div>
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;