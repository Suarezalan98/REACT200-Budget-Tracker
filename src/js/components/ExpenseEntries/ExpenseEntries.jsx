import React from "react";
import {
  updateExpenseDescription,
  updateExpenseAmount,
  addExpense
} from "./expenseActions";

export default class ExpenseEntries extends React.Component {
  constructor(props) {
    super(props);
    this.handleDescriptionInput = this.handleDescriptionInput.bind(this);
    this.handleAmountInput = this.handleAmountInput.bind(this);
    this.handleAddExpense = this.handleAddExpense.bind(this);
  }

  handleDescriptionInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateExpenseDescription(value));
  }

  handleAmountInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateExpenseAmount(value));
  }

  handleAddExpense() {
    const { description, amount, dispatch } = this.props;
    dispatch(addExpense(description, amount));
  }

  render() {
    const { description, amount, lineItems } = this.props;
    return (
      <div className="card border-danger mb-3">
        <div className="card-header text-white bg-danger">Expense Entries</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="expense-description">Description</label>
              <input
                type="text"
                className="form-control"
                id="expense-description"
                value={description}
                onChange={this.handleDescriptionInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="expense-amount">Amount</label>
              <div className="input-group">
                <span className="input-group-addon">$</span>
                <input
                  type="text"
                  className="form-control"
                  id="expense-amount"
                  value={amount}
                  onChange={this.handleAmountInput}
                />
              </div>
            </div>
            <button
              type="button"
              className="btn btn-danger col-12 mb-5"
              onClick={this.handleAddExpense}
            >
              + Add Expense
            </button>
            <table className="table table-sm table-hover">
              <thead>
                <tr>
                  <th>Description</th>
                  <th style={{ width: 120 }}>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Rent</td>
                  <td>$1,500.00</td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    );
  }
}
