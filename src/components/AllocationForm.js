import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = (props) => {
    const { dispatch, remaining } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    const submitEvent = () => {

        if (cost > remaining) {
            // alert("The value cannot exceed remaining funds  £"+remaining);
            setCost("");
            return;
        }

        const expense = {
            name: name,
            cost: parseInt(cost),
        };
        if (action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense,
            });
        }
    };

    const errorMessage = (cost, remaining) => cost > remaining ?
        <div class="alert alert-danger" role="alert">The value cannot exceed remaining funds £ {remaining}</div> : <></>

    return (
        <>
            <div className="card-body">
                <div className='row'>

                    <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                        <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                            <option defaultValue>Choose...</option>
                            <option value="Marketing" name="marketing"> Marketing</option>
                            <option value="Sales" name="sales">Sales</option>
                            <option value="Finance" name="finance">Finance</option>
                            <option value="HR" name="hr">HR</option>
                            <option value="IT" name="it">IT</option>
                            <option value="Admin" name="admin">Admin</option>
                        </select>
                    </div>

                    <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                        <select className="custom-select form-control" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                            <option defaultValue value="Add" name="Add">Add</option>
                            <option value="Reduce" name="Reduce">Reduce</option>
                        </select>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">£</span>
                        <input
                            required='required'
                            type='number'
                            id='cost'
                            value={cost}
                            class="form-control"
                            placeholder="Amount"
                            onChange={(event) => setCost(event.target.value)}>
                        </input>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <div class="text-start">
                    {cost > remaining && <div class="alert alert-danger" role="alert">The value cannot exceed remaining funds £ {remaining}</div>}
                </div>
                <div class="text-end">
                    <button className="btn btn-lg btn-primary" onClick={submitEvent}>Save</button>
                </div>
            </div>
        </>
    );
};

export default AllocationForm;
