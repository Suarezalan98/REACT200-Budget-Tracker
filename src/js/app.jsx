import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron' >
          <h1 className='display-3 text-center'>Budget Tracker</h1>
        </div>
        <div className='row'>
          <div className='col-12 col-md-6 mb-4'>
            <div className='card border-danger mb-3'>
              <div className='card-header text-white bg-danger'>Income Entries</div>
              <div className='card-body'>
                <form>
                  <div className='form-group'>
                    <label htmlFor='income-description'>Description</label>
                    <input
                      type='text'
                      className='form-control'
                      id='income-description'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='income-amount'>Amount</label>
                    <div className='input-group'>
                      <span className='input-group-addon'>$</span>
                      <input
                        type='text'
                        className='form-control'
                        id='income-amount'
                      />
                    </div>
                  </div>
                  <button
                    type='button'
                    className='btn btn-danger col-12 mb-5'
                  >+ Add Expense
                  </button>
                  <table className='table table-sm table-hover'>
                    <thead>
                      <tr>
                        <th>Description</th>
                        <th style={ { width: 120 } } >Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Rent</td>
                        <td>$$4,000.00</td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </div>
            </div>
          </div>
          <div className='col-12 col-md-6 mb-4'>
            <div className='card border-danger mb-3'>
              <div className='card-header text-white bg-danger'>Expense Entries</div>
              <div className='card-body'>
                <form>
                  <div className='form-group'>
                    <label htmlFor='expense-description'>Description</label>
                    <input
                      type='text'
                      className='form-control'
                      id='expense-description'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='expense-amount'>Amount</label>
                    <div className='input-group'>
                      <span className='input-group-addon'>$</span>
                      <input
                        type='text'
                        className='form-control'
                        id='expense-amount'
                      />
                    </div>
                  </div>
                  <button
                    type='button'
                    className='btn btn-danger col-12 mb-5'
                  >+ Add Expense
                  </button>
                  <table className='table table-sm table-hover'>
                    <thead>
                      <tr>
                        <th>Description</th>
                        <th style={ { width: 120 } } >Amount</th>
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
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-12 col-md-6'>
            <div className='card border-info mb-3'>
              <div className='card-header text-white bg-info'>Summary</div>
              <div className='card-body'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-6 text-center'>
                      <h6 className='h6 strong'>Total Income</h6>
                      <p>$4,000.00</p>
                    </div>
                    <div className='col-6 text-center'>
                      <h6 className='h6 strong'>Total Expenses</h6>
                      <p>$1,500.00</p>
                    </div>
                  </div>
                  <div className='row justify-content-center'>
                    <div className='col-6 text-center'>
                      <h6 className='h6 strong'>Left after spending</h6>
                      <p>$1,500.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
