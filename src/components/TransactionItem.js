import React from 'react'

function TransactionItem({ transaction, onDelete }) {
  return (
    <tr key={transaction.id}>
      <td>{transaction.id}</td>
      <td>{transaction.date || new Date().toLocaleDateString()}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>$ {transaction.amount}</td>
      <button onClick={() => onDelete(transaction.id)} className="remove">
        X
      </button>
    </tr>
  );
}

export default TransactionItem;



