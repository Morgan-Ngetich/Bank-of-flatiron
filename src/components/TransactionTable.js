import React, { useState } from 'react';
 import TransactionItem from './TransactionItem'

function TransactionTable({ transactions, handleDelete }) { //transactions = data, handleDelete => function passed down as props
  //State hooks for SearchTerm and SortOption
  const [searchTerm, setSearchTerm] = useState(''); //State to store the search term
  const [sortOption, setSortOption] = useState('id'); //State to store the sort option

    // Filter and sort the trasactions based on search term and sort option
    // Transactions =>data(array{ contains => Objects})
    // ".filter" method contains elements that satisfy a condition
    //transaction.description.toLowerCase() { converting transactions to lowerCase to ensure case insensitive comparison}
    //includes(searchTerm.toLowerCase() {checks if the lowerCase description contains lowerCase version of the "searchTerm"}
    const filteredTransactions = transactions
    .filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => { //sorting function that takes two parameters (a, b)
      //Switch statement checks the value of sortOptions
      switch (sortOption) { 
        case 'id':   //If "sortOption" compares transactions based on id in ascending order
          return a.id - b.id;
        case 'date': //If "sortOption = date" it compares transactions based on their date in chronological order
          return new Date(a.date) - new Date(b.date);
        case 'description':  //If "sortOptions = description compare "
          return a.description.localeCompare(b.description);
        case 'category'://"localeCompare()"" is a method in JavaScript that is used to compare strings, character by character.       
          return a.category.localeCompare(b.category);
        case 'amount'://If "sortOption = amount" it compares transactions based on their amount in ascending order
          return a.amount - b.amount;
        default:
          return 0;
      }
    });

  function deleteTransaction(id) {
    fetch(`https://my-json-server.typicode.com/Morgan-Ngetich/Bank-of-flatiron/transactions/${id}`, {
      method: 'DELETE',
    });
    handleDelete(id);
  }

  return (
    <div className="table">
      <div className="sort-select">
        <label htmlFor="sort">Sort by:</label>
        {/* Uses dropDown <select></select> */}
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
        {/* <thead> includes a table row */}
        <thead className="table-head">
          <tr>
            <th className="details">ID</th>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>

        {/* <tbody> dynamically renders rows based on filtered transactions */}
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
              {/* "colSpan" HTML attribute specifies the number of columns in a table */}
              {/* when there are no transactions to display, this single row with a cell spanning all columns is used to show an error message in a visually clear way. */}
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



//Example localeCompare:
/* 
const string1 = 'apple';
const string2 = 'banana';

const result = string1.localeCompare(string2);

if (result < 0) {
  console.log(`${string1} comes before ${string2}`);
} else if (result > 0) {
  console.log(`${string1} comes after ${string2}`);
} else {
  console.log(`${string1} and ${string2} are equivalent`);
}

//=> apple is greater than banana
*/