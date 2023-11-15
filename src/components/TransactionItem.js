import React from 'react'
//StateLess component => it does not manage
function TransactionItem({ transaction, onDelete }) {
  return (
    //"tr" represents the table row
    //"td" represents the cell in a row
     //Key props to let React identify the items changed 
    <tr key={transaction.id}>   
      <td>{transaction.id}</td>
      <td>{transaction.date || new Date().toLocaleDateString()}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>$ {transaction.amount}</td>
      {/* call the Ondelete function passed as a prop */}
      <button onClick={() => onDelete(transaction.id)} className="remove"> 
        X  
      </button>
    </tr>
  );
}

export default TransactionItem;



