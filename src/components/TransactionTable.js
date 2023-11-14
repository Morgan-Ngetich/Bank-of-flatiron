import React, { useState } from 'react';
 import TransactionItem from './TransactionItem'

function TransactionTable({ transactions, handleDelete }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('id'); 

  const filteredTransactions = transactions
    .filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortOption) {
        case 'id':
          return a.id - b.id;
        case 'date':
          return new Date(a.date) - new Date(b.date);
        case 'description':
          return a.description.localeCompare(b.description);
        case 'category':
          return a.category.localeCompare(b.category);
        case 'amount':
          return a.amount - b.amount;
        default:
          return 0;
      }
    });

  function deleteTransaction(id) {
    fetch(`http://localhost:3000/transactions/${id}`, {
      method: 'DELETE',
    });
    handleDelete(id);
  }

  return (
    <div className="table">
      <div className="sort-select">
        <label htmlFor="sort">Sort by:</label>
        <select
          id="sort"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="id">ID</option>
          <option value="date">Date</option>
          <option value="description">Description</option>
          <option value="category">Category</option>
          <option value="amount">Amount</option>
        </select>
      </div>

      <input
        className="search-box"
        type="text"
        placeholder="Search by Description"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <table>
        <thead className="table-head">
          <tr>
            <th className="details">ID</th>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          {filteredTransactions.length > 0 ? (
            filteredTransactions.map((transaction) => (
              <TransactionItem
              key={transaction.id}
              transaction={transaction}
              onDelete={deleteTransaction}
            />
            ))
          ) : (
            <tr>
              <td colSpan="5">
                <h2 className="error-message">Transaction not found!!!</h2>
              </td>
            </tr>
          )}

        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
