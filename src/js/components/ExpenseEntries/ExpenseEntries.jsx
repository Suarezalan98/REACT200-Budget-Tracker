import React from "react";

export default class ExpenseEntries extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
                />
              </div>
            </div>
            <button type="button" className="btn btn-danger col-12 mb-5">
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
