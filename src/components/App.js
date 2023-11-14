import React, { useEffect, useState } from 'react';
import './App.css';
import TransactionTable from "./TransactionTable"
import TransactionForm from "./TransactionForm"


function App() {
  const [fetchedData, setFetchedData] = useState(null);
  const [newTransaction, setNewTransaction] = useState({
    date: '',
    description: '',
    category: '',
    amount: 0,
  })

  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then((res) => res.json())
      .then((data) =>  setFetchedData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(newTransaction),
    })
    .then((res) => res.json())
    .then((data) => {

      setFetchedData((prevData) => {
        return [...prevData, data];
      });

      setNewTransaction({
        date: "",
        description: "",
        category: "",
        amount: 0,
      });
    })
    .catch((error) => console.error("Error adding transactions:", error))
  }

 if(!fetchedData) return <h2 className="app">Loading...</h2>

 function handleDelete(id) {
  // Filter creates a new array (updatedTodos) that contains all the new todos except the one that matches the id
  const updatedTransactions = fetchedData.filter(transaction => transaction.id !== id);
  setFetchedData(updatedTransactions);
}


  return (
    <div className="app">
    <h1>Transaction Details</h1>
    
    <TransactionForm 
      newTransaction={newTransaction}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
    />
    
    <TransactionTable transactions={fetchedData} handleDelete={handleDelete}/>
  </div>
  );
}

export default App;
