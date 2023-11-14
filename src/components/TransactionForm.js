import React from 'react'

function TransactionForm( { newTransaction, handleInputChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="tables">
      <h2 className="add-header">Add new Transaction</h2>
      <input
        className="inputs"       
        type="date"
        name="date"
        value={newTransaction.date}
        onChange={handleInputChange}
      />
            
      <input
      className="inputs"
        type="text"
        name="description"
        placeholder="Description"
        value={newTransaction.description}
        onChange={handleInputChange}
      />

      <input 
      className="inputs"
        type="text"
        name="category"
        placeholder="Category"
        value={newTransaction.category}
        onChange={handleInputChange}
      />
      <input 
      className="inputs"
        type="number"
        name="amount"
        placeholder="Amount"
        value={newTransaction.amount}
        onChange={handleInputChange}
      />

      <button type="submit" className="submit-button">Add Transaction</button>
    </form>
  )
}

export default TransactionForm